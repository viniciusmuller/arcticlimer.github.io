import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { IoIosCheckbox } from 'react-icons/io';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import { Project, Icon } from '@common/types';
import useStyles, { IconsWrapper } from '@styles/components/projectCard';
import { ListItemIcon, ListSubheader } from '@material-ui/core';

function ProjectCard(props: Project) {
  const [modalOpen, setModalOpen] = useState(false);
  const classes = useStyles();

  function renderIcons(icons: Icon[]) {
    return icons.map((icon) => (
      <icon.icon
        key={icon.name}
        className={classes.techIcon}
        title={icon.name}
        size={24}
      />
    ));
  }

  const { about, challenges, landingImage, name, description, icons } = props;

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <Card key={name} className={classes.root} onClick={handleOpen}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={landingImage}
            title={name}
          />
          <CardContent>
            <Typography gutterBottom align="left" variant="h5" component="h2">
              {name}
            </Typography>
            <Typography color="textSecondary" align="justify" variant="body2">
              {description}
            </Typography>
            <IconsWrapper>{renderIcons(icons)}</IconsWrapper>
          </CardContent>
        </CardActionArea>
      </Card>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={modalOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modalOpen}>
          <div className={classes.paper}>
            <Typography
              style={{ marginBottom: 15 }}
              variant="h2"
              id="transition-modal-title"
            >
              {name}
            </Typography>
            <Typography
              variant="h3"
              style={{ fontSize: 20, marginBottom: 20 }}
              id="transition-modal-description"
            >
              {description}
            </Typography>

            <Typography>{about}</Typography>

            <List subheader={<ListSubheader>Challenges</ListSubheader>}>
              {/* eslint-disable react/no-array-index-key */}
              {challenges.map((challenge, i) => (
                <ListItem key={i}>
                  <ListItemIcon>
                    <IoIosCheckbox />
                  </ListItemIcon>
                  <ListItemText style={{ fontSize: 4 }} primary={challenge} />
                </ListItem>
              ))}
            </List>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default ProjectCard;
