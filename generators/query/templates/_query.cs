namespace <%= namespace %>
{
	public class <%= className %>Query : IQuery
	{
		public string Param1 { get; private set; }
		public string Param2 { get; private set; }

		public <%= className %>Query(string param1, string param2)
		{
			Param1 = param1;
			Param2 = param2;
		}
	}
}