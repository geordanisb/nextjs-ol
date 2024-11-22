using Microsoft.EntityFrameworkCore;

namespace API.Models;

public class Pole
{

    public int Id { get; set; }
    public string BARRAMENT { get; set; }=string.Empty;
    public double Xp { get; set; }
    public double Yp { get; set; }
    //SELECT 'Poles' as ELENAME,BARRAMENT as ELELABEL,p.Id,1 as EType, p.Xp as p1x, p.Yp as p1y, p.Xp as p2x, p.Yp as p2y, '' as GeoInfo FROM [Poles] as p left join PoleTypes pt on pt.Id = p.TypeId left join PoleMaterials pm on pm.Id = p.MaterialId left join (select so.Id, so.Number, so.SecondaryStateId, st.[Name] as [Status], sot.TargetId, row_number() OVER (PARTITION BY sot.TargetId ORDER BY r.Date desc) as pos from ServiceOrders so inner join Registers r on r.Id = so.LastRegisterId and so.ServiceOrderTypeId = 2 inner join ServiceOrderSecondaryStates st on st.Id = so.SecondaryStateId inner join ServiceOrderTasks sot on sot.ServiceOrderId = so.Id and sot.Status != 1 and sot.Status != 3) sotable on sotable.TargetId = p.Id and pos = 1 WHERE KindId <> 2 and KindId <> 4 AND Projection.STIntersects(@Quad) = 1
}