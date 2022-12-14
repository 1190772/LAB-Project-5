using DDDSample1.Domain;
using DDDSample1.Domain.Categories;
using DDDSample1.Domain.Families;
using DDDSample1.Domain.Products;
using DDDSample1.Domain.Shared;
using DDDSample1.Infrastructure;
using DDDSample1.Infrastructure.Categories;
using DDDSample1.Infrastructure.Delivery;
using DDDSample1.Infrastructure.Families;
using DDDSample1.Infrastructure.Products;
using DDDSample1.Infrastructure.Shared;
using DDDSample1.Infrastructure.Warehouse;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;

namespace DDDSample1
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //services.AddDbContext<DDDSample1DbContext>(opt =>
            //    opt.UseInMemoryDatabase("DDDSample1DB")
            //        .ReplaceService<IValueConverterSelector, StronglyEntityIdValueConverterSelector>());

             services.AddDbContext<DDDSample1DbContext>(opt =>
             opt.UseSqlServer(Configuration.GetConnectionString("sqlserver"))
                 .ReplaceService<IValueConverterSelector, StronglyEntityIdValueConverterSelector>());

            ConfigureMyServices(services);

            services.AddCors(options => options.AddDefaultPolicy(
                            builder=> builder.AllowAnyOrigin()
            ));

            services.AddControllers().AddNewtonsoftJson();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseCors();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
                app.UseCors();
            }
            app.UseCors();
            app.UseHttpsRedirection();

            app.UseCors();

            app.UseRouting();








            app.UseCors();














            app.UseAuthorization();
            app.UseCors();

            app.UseEndpoints(endpoints => { endpoints.MapControllers(); });
            app.UseCors();
            
            
           
        }

        public void ConfigureMyServices(IServiceCollection services)
        {


            services.AddTransient<IUnitOfWork, UnitOfWork>();

            services.AddTransient<ICategoryRepository, CategoryRepository>();
            services.AddTransient<CategoryService>();

            services.AddTransient<IProductRepository, ProductRepository>();
            services.AddTransient<ProductService>();

            services.AddTransient<IFamilyRepository, FamilyRepository>();
            services.AddTransient<FamilyService>();

            services.AddTransient<IDeliveryService, DeliveryService>();
            services.AddTransient<IDeliveryRepository, DeliveryRepository>();
            
            services.AddTransient<IWarehouseService, WarehouseService>();
            services.AddTransient<IWarehouseRepository, WarehouseRepository>();
            
            
        }
    }
}