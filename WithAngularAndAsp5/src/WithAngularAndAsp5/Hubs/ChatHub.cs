using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WithAngularAndAsp5.Hubs
{
    class User
    {
        public string name { get; private set; }
        public string message { get; private set; }
        public User(string name, string message)
        {
            this.name = name;
            this.message = message;
        }
    }
    public class ChatHub : Hub
    {
        public void Send(string name, string message)
        {
            Clients.All.reciveMessage(new User(name, message));
        }
        
        public override Task OnConnected()
        {
            return base.OnConnected();
        }
    }
}
