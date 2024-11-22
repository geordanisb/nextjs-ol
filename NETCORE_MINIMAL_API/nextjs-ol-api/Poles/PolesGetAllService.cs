using API.Data;
using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Poles;

public class PoleService
{
    private readonly PoleContext _context;

    public PoleService(PoleContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Pole>> GetAll()
    {
        return await _context.Poles
            .AsNoTracking()
            .ToListAsync();
    }
    public Pole? GetById(int id)
    {
        return _context.Poles
            .AsNoTracking()
            .SingleOrDefault(p => p.Id == id);
    }
}