import { Card, CardMedia, CardContent, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

interface HeaderCardProps {
  image: string
  title: string
}

const useStyles = makeStyles({
  image: {
    height: 350,
  },
})

export const HeaderCard = ({ image, title }: HeaderCardProps) => {
  const classes = useStyles()
  return (
    <Card>
      <CardMedia image={image} title={title} className={classes.image} />
      <CardContent>
        <Typography>Hello World</Typography>
      </CardContent>
    </Card>
  )
}
