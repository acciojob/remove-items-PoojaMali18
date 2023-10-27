//your JS code here. If required.
function solve()
	{
		const select = document.querySelector("select");
		const selectedvalue = select.value;
		let options =select.children;
		for(let i=0;i<options.length;i++)
			{
				if(options[i].value===selectedvalue)
				{
					options[i].remove();
					break;
				}
			}
	}

const button = document.getElementById("fe");
button.addEventListener("click",solve)