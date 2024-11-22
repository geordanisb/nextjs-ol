// using API.Data;
// using API.Services;
using API.Data;
using FastEndpoints;
using Microsoft.EntityFrameworkCore;
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddFastEndpoints()
                .AddResponseCaching();

// builder.Services.AddSqlServer<PoleContext>("Server=localhost;Database=GlobalCity-Dev;User=sa;Password=1.D1c.2022;Trusted_Connection=False;Encrypt=False;");
// builder.Services.AddScoped<PoleService>();
builder.Services.AddDbContextFactory<PoleContext>(options=>{
    options.UseSqlServer("Server=localhost;Database=GlobalCity-Dev;User=sa;Password=1.D1c.2022;Trusted_Connection=False;Encrypt=False;");
});
builder.Services.AddCors(options =>
         options.AddPolicy("CorsApi", p => p.WithOrigins("http://localhost:3000/")
                                                 .AllowAnyHeader()
                                                 .AllowAnyMethod()
                                                 .AllowCredentials()
                        )
);
var app = builder.Build();

app.UseResponseCaching()
    .UseFastEndpoints(); 

app.UseCors("CorsApi");

app.Run();
