using Microsoft.AspNetCore.Mvc;
using Notesb.Models;
using Notesb.Services;
using Notesb.Pagination;

namespace Notesb.Controllers
{
    [Route("api/user")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserDataService _userDataService;

        public UserController(IUserDataService userDataService)
        {
            _userDataService = userDataService;
        }


        // GET: api/User
        [HttpGet]
        public ResponseModel<UserModel> Get([FromQuery]PageParameters pageParameters)
        {
            PagedData<UserModel> pagedData = _userDataService.Get(pageParameters);

            return pagedData.responseModel;
        }

        // GET: api/User/5
        [HttpGet("{id}", Name = "Get")]
        public ActionResult<UserModel> Get(int id)
        {
            var user = _userDataService.Get(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // POST: api/User
        [HttpPost]
        public ActionResult<UserModel> Post(UserModel userModel)
        {
           return _userDataService.Create(userModel);
        }

        // PUT: api/User/5
        [HttpPut]
        public ActionResult<UserModel> Put(UserModel userModel)
        {
            var user = _userDataService.Get(userModel._id);

            if (user == null)
            {
                return NotFound();
            }

            _userDataService.Update(userModel);
            return userModel;
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public ActionResult<UserModel> Delete(int id)
        {
            var user = _userDataService.Get(id);
            if (user == null)
            {
                return NotFound();
            }
            _userDataService.Delete(id);
            return user;
        }
    }
}
