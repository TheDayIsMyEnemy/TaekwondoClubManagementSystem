import React from 'react'
import { createStyles } from '@mantine/styles'
import { ThemeIcon, UnstyledButton, Group, Text, Anchor } from '@mantine/core'
import { Link } from 'react-router-dom'
import routes, { Route } from '../../routes'

const useStyles = createStyles(theme => ({
  button: {
    display: 'block',
    padding: theme.spacing.xs,
    borderRadius: theme.radius.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

    '&:hover': {
      textDecoration: 'none',
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },

    '&:focus': {
      textDecoration: 'none',
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
}))

function MainLink({  color, name, path }: Route) {
  const { classes } = useStyles()

  return (
    <>
      <Anchor component={Link} to={path} className={classes.button}>
        {/* <UnstyledButton className={classes.button}> */}
        <Group>
          <ThemeIcon color={color} variant="light">
            {/* <Icon /> */}
          </ThemeIcon>

          <Text size="sm">{name}</Text>
        </Group>
        {/* </UnstyledButton> */}
      </Anchor>
    </>
  )
}

/**
 * @see https://github.com/mantinedev/mantine/blob/master/src/mantine-core/src/components/AppShell/demos/_mainLinks.tsx
 */
export default function MainLinks() {
  const links = routes.map(link => <MainLink {...link} key={link.name} />)
  return <div>{links}</div>
}
