import { getStats } from '@/data/get-stats';
import { useDevice } from '@/lib/hooks/use-device';
import { cn } from '@/lib/utils';

import Stat from './stat';

export default function Stats() {
  const { isXsDevice } = useDevice();

  return (
    <div
      className={cn("flex flex-wrap justify-center gap-10 lg:justify-start")}
    >
      {getStats.map((stat) =>
        isXsDevice ? (
          <Stat
            key={`stat-${stat.id}`}
            {...stat}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween" }}
            viewport={{ amount: 0.5, once: true }}
          />
        ) : (
          <Stat
            key={`stat-${stat.id}`}
            {...stat}
            style={{ opacity: 0, scale: 0.7 }}
          />
        ),
      )}
    </div>
  );
}
