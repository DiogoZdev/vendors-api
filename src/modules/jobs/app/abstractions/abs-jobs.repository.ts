import { IJob } from '@jobs/domain/entities/job.entity';

export abstract class AbsJobsRepository {
	abstract createJob(job: IJob): Promise<IJob>;

	abstract deleteJob(jobId: number): Promise<string>;
}
