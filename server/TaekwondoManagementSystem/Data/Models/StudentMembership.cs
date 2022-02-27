﻿using System.ComponentModel.DataAnnotations.Schema;

namespace Data.Models
{
    public class StudentMembership
    {
        public int Id { get; set; }

        public DateTime? StartDate { get; set; }

        public DateTime? EndDate { get; set; }

        [NotMapped]
        public bool IsExpired => DateTime.Now > EndDate;

        public string? Note { get; set; }

        public int StudentId { get; set; }
        public Student Student { get; set; }
    }
}
