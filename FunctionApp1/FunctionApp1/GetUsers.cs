using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Azure.WebJobs.Host;
using Newtonsoft.Json;
using VacationFunctions.Models;

namespace VacationFunctions
{
    public static class GetUsers
    {
        [FunctionName("GetUsers")]
        public static HttpResponseMessage Run([HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)]HttpRequestMessage req, TraceWriter log)
        {
            log.Info("C# HTTP trigger function processed a request.");

            var users = new User[]
            {
                new User
                {
                    Name = "Mateusz",
                    Country = "Maginficent Kingdom of Poland"
                },
                new User
                {
                    Name = "Piotrek",
                    Country = "Maginficent Kingdom of Poland"
                },
                new User
                {
                    Name = "Miro",
                    Country = "Maginficent Kingdom of Poland"
                },
                new User
                {
                    Name = "Kuba",
                    Country = "Maginficent Kingdom of Poland"
                },
                new User
                {
                    Name = "Rafa³",
                    Country = "Tczef"
                },
            };

            return new HttpResponseMessage(HttpStatusCode.OK)
            {
                Content = new StringContent(JsonConvert.SerializeObject(users), Encoding.UTF8, "application/json")
            };
        }
    }
}
