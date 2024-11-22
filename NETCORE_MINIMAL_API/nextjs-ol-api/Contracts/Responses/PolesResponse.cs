namespace API.Contracts.Responses;

public class PolesResponse{
    public int Id { get; set; }
    public string BARRAMENT { get; set; }=string.Empty;
    public double Xp { get; set; }
    public double Yp { get; set; }
}