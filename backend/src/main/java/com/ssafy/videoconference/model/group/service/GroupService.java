package com.ssafy.videoconference.model.group.service;

import java.util.List;

import com.ssafy.videoconference.controller.command.ChangeGroupAllCommand;
import com.ssafy.videoconference.controller.command.ChangeGroupNameCommand;
import com.ssafy.videoconference.controller.command.ChangeHostIdCommand;
import com.ssafy.videoconference.controller.command.ChangeIntroCommand;
import com.ssafy.videoconference.controller.command.CreateGroupCommand;
import com.ssafy.videoconference.model.group.bean.Group;


public interface GroupService {
	

	Group createGroup(CreateGroupCommand command);
	
	
	Group findById(int groupNo);
	
	
	List<Group> findByHostId(String hostId);
	
	
	List<Group> findByUserId(String userId);
	
	
	void deleteByHostId(String hostId);
	
	
	void deleteByNo(int groupNo);
	
	
	void changeHostId(ChangeHostIdCommand command);
	
	
	void changeGroupName(ChangeGroupNameCommand command);
	
	
	void changeIntro(ChangeIntroCommand command);
	
	
	boolean changeHasMeeting(int groupNo);


	void changeAll(ChangeGroupAllCommand command);


	void initMeeting(String id);


}