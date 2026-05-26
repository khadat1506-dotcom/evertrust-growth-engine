// Supabase configuration for the Growth Engine dashboard.
// If both values are filled in, the dashboard syncs state across all users in realtime.
// If either is blank, the dashboard falls back to per-browser localStorage only.
//
// Get these from: https://app.supabase.com -> your project -> Project Settings -> API
window.EVERTRUST_SUPABASE_URL = "https://xcrehigxvsjollupqslr.supabase.co";
window.EVERTRUST_SUPABASE_KEY = "sb_publishable_2Zq6QAe--SScketxtNbJcQ_QCmiqFyn";

// AIM "Lock & Load" -> n8n webhook that creates a Drive folder + config.json under
// "Evertrust Campaign". Leave blank to skip the deploy step (config still saves locally).
// Workflow: WF - AIM Deploy Campaign (id XNWakqrEYDAu90lY)
window.EVERTRUST_DEPLOY_WEBHOOK = "https://evertrustgmbh.app.n8n.cloud/webhook/aim-deploy-campaign";
