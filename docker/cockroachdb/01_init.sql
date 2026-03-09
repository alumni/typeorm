SET CLUSTER SETTING jobs.registry.interval.cancel = '180s';
SET CLUSTER SETTING jobs.registry.interval.gc = '30s';
SET CLUSTER SETTING jobs.retention_time = '15s';
SET CLUSTER SETTING kv.range_merge.queue_interval = '50ms';
SET CLUSTER SETTING kv.range_split.by_load_merge_delay = '5s';
SET CLUSTER SETTING sql.stats.automatic_collection.enabled = false;

ALTER RANGE default CONFIGURE ZONE USING num_replicas = 1, gc.ttlseconds = 30;
ALTER DATABASE defaultdb CONFIGURE ZONE USING num_replicas = 1, gc.ttlseconds = 30;
ALTER DATABASE system CONFIGURE ZONE USING num_replicas = 1, gc.ttlseconds = 30;
