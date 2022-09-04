interface IRegisteredComplaint {
  category: string;
  title: string;
  description?: string;
  countComplaints: number;
  image: string;
  creationDate?: Date;
  id: string;
}

export default IRegisteredComplaint;
