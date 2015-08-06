using Raven.Client;

namespace <%= namespace %>
{
	public class <%= className %>CommandHandler : ICommandHandler<<%= className %>Command>
	{
		private readonly IDocumentStore _store;
		public <%= className %>CommandHandler(IDocumentStore store) { _store = store; }
		public void Handle(<%= className %>Command command)
		{
			using (var session = _store.OpenSession())
			{
				// Do your work here.
				
				session.SaveChanges();
			}
		}
	}
}