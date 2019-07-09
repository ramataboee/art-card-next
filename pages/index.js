import Layout from "../components/MainLayout";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SummaryCard from "../components/SummaryCard";

function getSummaries() {
  return [
    {
      id: "total-hts-visits",
      title: "Client Visits",
      description: "Total HTS visits"
    },
    {
      id: "total-clients",
      title: "total-clients",
      description: "Total HTS Clients"
    },
    {
      id: "positive",
      title: "positive",
      description: "# of positive tests"
    },
    {
      id: "negative",
      title: "negative",
      description: "# of negative tests"
    }
  ];
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

/*const PostLink = ({ post }) => (
  <li>
    <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
      <a>{post.title}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: "Arial";
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
);
*/
export default function Dashboard() {
  const classes = useStyles();
  return (
    <Layout>
      <div className={classes.root}>
        <h1>Dashboard</h1>
        <Grid container spacing={3}>
          {getSummaries().map(summary => (
            <Grid item xs={3}>
              <SummaryCard itemdata={summary} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
}

/*export default function Blog() {
  return (
    <Layout>
      <h1>My blog</h1>
      <ul>
        {getPosts().map(post => (
          <PostLink key={post.id} post={post} />
        ))}
      </ul>
      <style jsx>{`
        h1,
        a {
          font-family: "Arial";
        }

        ul {
          padding: 0;
        }
      `}</style>
    </Layout>
  );
}*/
