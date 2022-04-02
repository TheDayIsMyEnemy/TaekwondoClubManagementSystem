﻿namespace WebApi.Models
{
    public class MembershipDto
    {
        public int Id { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        public string? Note { get; set; }

        public bool IsActive { get; set; }
    }
}