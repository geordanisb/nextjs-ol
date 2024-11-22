using API.Contracts.Responses;
using API.Data;
using API.Models;
using FastEndpoints;

namespace API.Poles;

class PolesGetAll:EndpointWithoutRequest<IEnumerable<Pole>>{
    PoleContext poleContext;
    public PolesGetAll(PoleContext poleContext){
        this.poleContext = poleContext;
    }
    public override void Configure()
    {
        Get("/poles");
        AllowAnonymous();
        
        // base.Configure();
    }
    public override async Task<IEnumerable<Pole>> ExecuteAsync(CancellationToken ct)
    {
        // var poles = new List<PolesResponse>{
        //     new PolesResponse{Id=1,Xp=123,Yp=456,BARRAMENT="ABC"},
        //     new PolesResponse{Id=1,Xp=123,Yp=456,BARRAMENT="ABC"},
        //     new PolesResponse{Id=1,Xp=123,Yp=456,BARRAMENT="ABC"}
        // };
        // var res = Task.FromResult(poles);
        var ps = new PoleService(poleContext);
        var res = await ps.GetAll();
        return res;
    }
}