using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Notesb.Models;
using Notesb.Services;
using Notesb.Pagination;

namespace Notesb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotesController : ControllerBase
    {
        private readonly NotesService _notesService;

        public NotesController(NotesService notesService)
        {
            _notesService = notesService;
        }

        // GET: api/Default
        [HttpGet]
        [Obsolete]
        public ResponseModel Get([FromQuery]PageParameters pageParameters)
        {
            PagedData pagedData = _notesService.Get(pageParameters);

            return pagedData.responseModel;
        }

        // GET: api/Default/5
        [HttpGet("{id:length(24)}", Name = "GetNote")]
        public ActionResult<Notes> Get(string id)
        {
            var note = _notesService.Get(id);

            if (note == null)
            {
                return NotFound();
            }

            return note;
        }

        // POST: api/Default
        [HttpPost]
        public ActionResult<Notes> Post(Notes notes)
        {
            _notesService.Create(notes);

            return notes;
        }

        // PUT: api/Default/5
        [HttpPut]
        public ActionResult<Notes> Put(Notes notes)
        {
            var note = _notesService.Get(notes.Id);
            if (note == null)
            {
                return NotFound();
            }
            _notesService.Update(notes);

            return notes;
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public ActionResult<Notes> Delete(string id)
        {
            var note = _notesService.Get(id);
            _notesService.Delete(note);

            return note;
        }
    }
}
