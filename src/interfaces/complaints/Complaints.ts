export interface IRegisteredComplaint {
  category: string;
  title: string;
  description?: string;
  countComplaints: number;
  image: string;
  creationDate?: Date;
  id: string;
}

export interface IComplaint {
  complaint: IRegisteredComplaint;
}
