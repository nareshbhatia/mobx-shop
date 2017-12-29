import React from 'react';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    root: {
        flex: 1,
        overflow: 'auto',
        padding: theme.spacing.unit
    }
});

class PageContentBase extends React.Component {
    render() {
        const { classes, children } = this.props;

        return <div className={classes.root}>{children}</div>;
    }
}

export const PageContent = withStyles(styles)(PageContentBase);
