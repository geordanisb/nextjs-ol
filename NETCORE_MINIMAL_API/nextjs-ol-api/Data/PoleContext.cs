using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class PoleContext : DbContext
{
    public PoleContext (DbContextOptions<PoleContext> options)
        : base(options)
    {
    }

    public DbSet<Pole> Poles => Set<Pole>();
}