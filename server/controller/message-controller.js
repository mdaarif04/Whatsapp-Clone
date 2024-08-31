import Messages from "../model/Messages.js";
import Conversation from "../model/Conversation.js";

export const newMessages = async (req, res) => {
    try {
      const newMessages = new Messages(req.body);
    await newMessages.save();
    await Conversation.findByIdAndUpdate(req.body.conversationId, {
      message: req.body.text,
    });

    res.status(200).json("Message has been sent successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getMessage = async (req, res) => {
  try {
    const messages = await Messages.find({ conversationId: req.params.id });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
