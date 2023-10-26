export class CreateFaqDto {
  question: string;
  answer: string;
  order: number | null;
  deleted: boolean | null;
  createdAt: Date;
  updatedAt: Date;
  createdBy: number | null;
  updatedBy: number | null;
  deletedBy: number | null;
  deletedAt: Date | null;
}
