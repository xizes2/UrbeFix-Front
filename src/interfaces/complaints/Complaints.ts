export interface IRegisteredComplaint {
  category: string;
  title: string;
  description?: string;
  countComplaints: number;
  image: string;
  creationDate?: Date;
  location?: string;
  id: string;
}

export interface IComplaint {
  complaint: IRegisteredComplaint;
}
