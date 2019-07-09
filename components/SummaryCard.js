import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    //background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 8,
    border: 0,
    padding: "0 30px",
    boxShadow: "0 15px 25px -10px rgba(0,0,0,.1)"
  },
  card: {
    minWidth: 275
  },
  title: {
    fontSize: 14
  }
});

export default function SummaryCard({ itemdata }) {
  const classes = useStyles();

  return (
    <div>
      <Card
        classes={{
          root: classes.root // class name, e.g. `classes-nesting-root-x`
        }}
      >
        <CardContent>
          <Typography variant="h5" component="h2">
            {itemdata.title}
          </Typography>
          <Typography variant="body2" component="p">
            {itemdata.description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

/*const SummaryCard = ({ item }) => (
  <li>
    <Card className="card">
      <CardContent>
        <Typography variant="h5" component="h2">
          {item.title}
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
    <style jsx>{`
      card {
        width: 275px;
        box-shadow: 0 20px 20px 0 #000;
      }
      li {
        list-style: none;
        margin: 5px 0;
      }
    `}</style>
  </li>
);*/

//export default SummaryCard;
