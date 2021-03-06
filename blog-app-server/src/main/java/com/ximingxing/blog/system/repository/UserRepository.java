package com.ximingxing.blog.system.repository;

import com.ximingxing.blog.system.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * Description: UserRepository
 * Created By xxm
 */
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    Optional<User> findByUsername(String username);

    void deleteByUsername(String username);
}
