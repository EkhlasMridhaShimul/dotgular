using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;
using Notesb.Models;
using Notesb.Services;

namespace Notesb
{
    public class StartupDevelopment
    {

        public StartupDevelopment(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        readonly string MyOrigin = "MyCorsPolicy";

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<DatabaseSettings>(Configuration.GetSection(nameof(DatabaseSettings)));
            services.AddSingleton<IDatabaseSettings>(noteDatabase => noteDatabase.GetRequiredService<IOptions<DatabaseSettings>>().Value);
            services.AddSingleton<IMyNoteBookDatabase, MyNoteBookDatabase>();
            services.AddSingleton<NotesService>();
            services.AddSingleton<UserDataService>();
            services.AddControllers();

            services.AddCors(options =>
            {
                options.AddPolicy(MyOrigin, builder =>
                {
                    builder.WithOrigins("http://localhost:4200").AllowAnyHeader().AllowAnyMethod();
                });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors(MyOrigin);

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            
        }
    }
}
