export interface IRegisteredComplaint {
  category: string;
  title: string;
  description?: string;
  countComplaints: number;
  image: string;
  creationDate?: Date;
  location?: number[];
  id: string;
  imageBackUp: string;
}

export interface IComplaint {
  complaint: IRegisteredComplaint;
}

export interface IUnegisteredComplaint {
  category: string;
  title: string;
  description?: string;
  countComplaints: number;
  image: string;
  creationDate?: Date;
  location?: number[];
}
