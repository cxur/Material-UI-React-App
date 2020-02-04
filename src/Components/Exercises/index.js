import React, { Fragment } from 'react';
import { Grid, Paper, Typography, List, ListItem, ListItemText } from '@material-ui/core';

const style = {
    Paper: { padding: 20, marginTop: 10, marginBottom: 10, height: 480, overflowY: 'auto' }
};

export default props =>
    <Grid container spacing={1}>
        <Grid item sm>
            <Paper style={style.Paper}>
                {props.exercises.map(([group, exercises]) =>
                    !props.category || props.category === group ?
                        <Fragment key={group}>
                            <Typography variant='subtitle1' style={{ textTransform: 'capitalize' }}>
                                {group}
                            </Typography>
                            {exercises.map(({ id, title }) =>
                                <List component="ul" aria-label="secondary mailbox folders">
                                    <ListItem button onClick={() => props.onSelect(id)}>
                                        <ListItemText primary={title} />
                                    </ListItem>
                                </List>
                            )}

                        </Fragment> : null

                )}
            </Paper>
        </Grid>
        <Grid item sm>
            <Paper style={style.Paper}>
                {props.exercise.id ?
                    <Fragment>
                        <Typography variant='subtitle2'>
                            {props.exercise.title}
                        </Typography>
                        <Typography variant='subheading' style={{ marginTop: 20 }}>
                            {props.exercise.description}
                        </Typography> </Fragment> :
                    <Fragment>
                        <Typography variant='subtitle2'>
                            Welcome!
          </Typography>
                        <Typography variant='subheading' style={{ marginTop: 20 }}>
                            Please select an exercise from the list on the left
          </Typography>
                    </Fragment>
                }


            </Paper>
        </Grid>
    </Grid>