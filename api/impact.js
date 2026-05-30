import supabase from './db-client.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();

  try {
    if (req.method === 'GET') {
      const { data, error } = await supabase
        .from('impact_stats')
        .select('*')
        .limit(1)
        .single();
      if (error && error.code !== 'PGRST116') throw error;
      
      if (!data) {
        const { data: newData, error: insertError } = await supabase
          .from('impact_stats')
          .insert({ visits_count: 0, packages_delivered: 0, volunteers_count: 0 })
          .select()
          .single();
        if (insertError) throw insertError;
        return res.status(200).json(newData);
      }
      
      return res.status(200).json(data);
    }

    if (req.method === 'PUT') {
      const { visits_count, packages_delivered, volunteers_count } = req.body;
      const { data: existing } = await supabase
        .from('impact_stats')
        .select('id')
        .limit(1)
        .single();
      
      if (existing) {
        const { data, error } = await supabase
          .from('impact_stats')
          .update({ visits_count, packages_delivered, volunteers_count })
          .eq('id', existing.id)
          .select()
          .single();
        if (error) throw error;
        return res.status(200).json(data);
      }
    }

    res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    console.error('API error:', err);
    res.status(500).json({ error: err.message });
  }
}
