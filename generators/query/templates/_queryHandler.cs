using Raven.Client;

namespace <%= namespace %>
{
	public class <%= className %>QueryHandler : IQueryHandler<<%= className %>Query, <%= className %>QueryResult>
	{
		private readonly IDocumentStore _store;

		public <%= className %>QueryHandler(IDocumentStore store) { _store = store; }

		public <%= className %>QueryResult Handle(<%= className %>Query query)
		{
			using(var session = _store.OpenSession())
			{
				// Write your query here.
				
			}
		}
	}
}
