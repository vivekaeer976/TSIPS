using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TreatyApi.Models;

namespace TreatyApi.Controllers
{
    public class TreatysController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        [Route("api/treatys")]
        public List<Treaty> Get()
        {
            TreatyDbContext db = new TreatyDbContext();
            List<Treaty> treaties = db.Treatys.ToList();
            return treaties;

        }

        [HttpGet]
        [Route("api/treatyitems")]
        public List<TreatyItem> Gettreatyitems()
        {
            TreatyDbContext db = new TreatyDbContext();
            List<TreatyItem> treaties = db.TreatyItems.ToList();
            return treaties;

        }
    }
}