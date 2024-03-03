DROP DATABASE IF EXISTS Blog;

CREATE DATABASE Blog;


DROP TABLE IF EXISTS posts;
CREATE TABLE IF NOT EXISTS posts(
    post_id BIGSERIAL PRIMARY KEY NOT NULL,
    title VARCHAR(100) NOT NULL,
    intro VARCHAR(250) NOT NULL,
    article TEXT
);

DROP TABLE IF EXISTS blogUsers;
CREATE TABLE IF NOT EXISTS blogUsers(
    user_id BIGSERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL
);

INSERT INTO blogUsers(name, email)
VALUES
    ('Jhon Doe', 'jhon.doe@gmail.com'),
    ('Jane Dev', 'jane.dev@gmail.com'),
    ('Rob Glob', 'rob_glob@gmail.com');

INSERT INTO posts(title, intro, article)
VALUES
    ('Lorem Ipsum', 
     'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
     ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim vitae risus vitae varius. Ut efficitur bibendum tortor, eget vehicula urna commodo ac. Suspendisse potenti. Nunc neque neque, pellentesque ac laoreet ut, convallis et libero. In hac habitasse platea dictumst. Morbi eleifend vestibulum fringilla. Aenean mattis metus enim, ac tristique urna euismod eu. Donec pharetra nec odio at porta. Phasellus congue fermentum enim, ultrices pulvinar nisl laoreet eu. Nulla sit amet mauris sagittis, viverra augue ac, aliquam justo. Nullam imperdiet, ex sit amet ultrices convallis, nibh nisl mattis elit, a aliquam turpis tortor eget erat. Curabitur volutpat posuere risus ut rhoncus. Nulla sed augue scelerisque, placerat augue vitae, tincidunt purus. Mauris auctor consectetur urna id auctor. Cras placerat dignissim odio ac feugiat.

    Donec sodales rutrum cursus. Nunc risus est, pellentesque nec ex a, luctus pulvinar leo. Vestibulum lorem risus, consectetur sed est et, faucibus convallis eros. Vivamus risus tellus, feugiat eu magna id, aliquam fermentum nunc. Donec ullamcorper tempor massa et ornare. Suspendisse id velit eu mauris gravida dapibus. Quisque imperdiet nisi eu sem suscipit, sed congue justo vulputate. Nunc semper nisl eget urna aliquet varius. Fusce a nulla ac diam viverra pellentesque. Ut sed sapien est. Fusce consectetur tincidunt ipsum vel accumsan. Proin fringilla fringilla scelerisque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean nec bibendum velit. Pellentesque id odio est. Pellentesque pulvinar ante non dui vulputate tincidunt. '),
    ('Morel Spumi', 
     'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
     ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim vitae risus vitae varius. Ut efficitur bibendum tortor, eget vehicula urna commodo ac. Suspendisse potenti. Nunc neque neque, pellentesque ac laoreet ut, convallis et libero. In hac habitasse platea dictumst. Morbi eleifend vestibulum fringilla. Aenean mattis metus enim, ac tristique urna euismod eu. Donec pharetra nec odio at porta. Phasellus congue fermentum enim, ultrices pulvinar nisl laoreet eu. Nulla sit amet mauris sagittis, viverra augue ac, aliquam justo. Nullam imperdiet, ex sit amet ultrices convallis, nibh nisl mattis elit, a aliquam turpis tortor eget erat. Curabitur volutpat posuere risus ut rhoncus. Nulla sed augue scelerisque, placerat augue vitae, tincidunt purus. Mauris auctor consectetur urna id auctor. Cras placerat dignissim odio ac feugiat.

    Donec sodales rutrum cursus. Nunc risus est, pellentesque nec ex a, luctus pulvinar leo. Vestibulum lorem risus, consectetur sed est et, faucibus convallis eros. Vivamus risus tellus, feugiat eu magna id, aliquam fermentum nunc. Donec ullamcorper tempor massa et ornare. Suspendisse id velit eu mauris gravida dapibus. Quisque imperdiet nisi eu sem suscipit, sed congue justo vulputate. Nunc semper nisl eget urna aliquet varius. Fusce a nulla ac diam viverra pellentesque. Ut sed sapien est. Fusce consectetur tincidunt ipsum vel accumsan. Proin fringilla fringilla scelerisque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean nec bibendum velit. Pellentesque id odio est. Pellentesque pulvinar ante non dui vulputate tincidunt. '),
    ('Elmor Mupsi', 
     'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
     ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim vitae risus vitae varius. Ut efficitur bibendum tortor, eget vehicula urna commodo ac. Suspendisse potenti. Nunc neque neque, pellentesque ac laoreet ut, convallis et libero. In hac habitasse platea dictumst. Morbi eleifend vestibulum fringilla. Aenean mattis metus enim, ac tristique urna euismod eu. Donec pharetra nec odio at porta. Phasellus congue fermentum enim, ultrices pulvinar nisl laoreet eu. Nulla sit amet mauris sagittis, viverra augue ac, aliquam justo. Nullam imperdiet, ex sit amet ultrices convallis, nibh nisl mattis elit, a aliquam turpis tortor eget erat. Curabitur volutpat posuere risus ut rhoncus. Nulla sed augue scelerisque, placerat augue vitae, tincidunt purus. Mauris auctor consectetur urna id auctor. Cras placerat dignissim odio ac feugiat.

    Donec sodales rutrum cursus. Nunc risus est, pellentesque nec ex a, luctus pulvinar leo. Vestibulum lorem risus, consectetur sed est et, faucibus convallis eros. Vivamus risus tellus, feugiat eu magna id, aliquam fermentum nunc. Donec ullamcorper tempor massa et ornare. Suspendisse id velit eu mauris gravida dapibus. Quisque imperdiet nisi eu sem suscipit, sed congue justo vulputate. Nunc semper nisl eget urna aliquet varius. Fusce a nulla ac diam viverra pellentesque. Ut sed sapien est. Fusce consectetur tincidunt ipsum vel accumsan. Proin fringilla fringilla scelerisque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean nec bibendum velit. Pellentesque id odio est. Pellentesque pulvinar ante non dui vulputate tincidunt. '),
    ('Merol Mipus', 
     'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
     ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim vitae risus vitae varius. Ut efficitur bibendum tortor, eget vehicula urna commodo ac. Suspendisse potenti. Nunc neque neque, pellentesque ac laoreet ut, convallis et libero. In hac habitasse platea dictumst. Morbi eleifend vestibulum fringilla. Aenean mattis metus enim, ac tristique urna euismod eu. Donec pharetra nec odio at porta. Phasellus congue fermentum enim, ultrices pulvinar nisl laoreet eu. Nulla sit amet mauris sagittis, viverra augue ac, aliquam justo. Nullam imperdiet, ex sit amet ultrices convallis, nibh nisl mattis elit, a aliquam turpis tortor eget erat. Curabitur volutpat posuere risus ut rhoncus. Nulla sed augue scelerisque, placerat augue vitae, tincidunt purus. Mauris auctor consectetur urna id auctor. Cras placerat dignissim odio ac feugiat.

    Donec sodales rutrum cursus. Nunc risus est, pellentesque nec ex a, luctus pulvinar leo. Vestibulum lorem risus, consectetur sed est et, faucibus convallis eros. Vivamus risus tellus, feugiat eu magna id, aliquam fermentum nunc. Donec ullamcorper tempor massa et ornare. Suspendisse id velit eu mauris gravida dapibus. Quisque imperdiet nisi eu sem suscipit, sed congue justo vulputate. Nunc semper nisl eget urna aliquet varius. Fusce a nulla ac diam viverra pellentesque. Ut sed sapien est. Fusce consectetur tincidunt ipsum vel accumsan. Proin fringilla fringilla scelerisque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean nec bibendum velit. Pellentesque id odio est. Pellentesque pulvinar ante non dui vulputate tincidunt. '),
    ('Elmor Mupsi', 
     'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
     ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim vitae risus vitae varius. Ut efficitur bibendum tortor, eget vehicula urna commodo ac. Suspendisse potenti. Nunc neque neque, pellentesque ac laoreet ut, convallis et libero. In hac habitasse platea dictumst. Morbi eleifend vestibulum fringilla. Aenean mattis metus enim, ac tristique urna euismod eu. Donec pharetra nec odio at porta. Phasellus congue fermentum enim, ultrices pulvinar nisl laoreet eu. Nulla sit amet mauris sagittis, viverra augue ac, aliquam justo. Nullam imperdiet, ex sit amet ultrices convallis, nibh nisl mattis elit, a aliquam turpis tortor eget erat. Curabitur volutpat posuere risus ut rhoncus. Nulla sed augue scelerisque, placerat augue vitae, tincidunt purus. Mauris auctor consectetur urna id auctor. Cras placerat dignissim odio ac feugiat.

    Donec sodales rutrum cursus. Nunc risus est, pellentesque nec ex a, luctus pulvinar leo. Vestibulum lorem risus, consectetur sed est et, faucibus convallis eros. Vivamus risus tellus, feugiat eu magna id, aliquam fermentum nunc. Donec ullamcorper tempor massa et ornare. Suspendisse id velit eu mauris gravida dapibus. Quisque imperdiet nisi eu sem suscipit, sed congue justo vulputate. Nunc semper nisl eget urna aliquet varius. Fusce a nulla ac diam viverra pellentesque. Ut sed sapien est. Fusce consectetur tincidunt ipsum vel accumsan. Proin fringilla fringilla scelerisque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean nec bibendum velit. Pellentesque id odio est. Pellentesque pulvinar ante non dui vulputate tincidunt. '),
    ('Merol Mipus', 
     'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
     ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim vitae risus vitae varius. Ut efficitur bibendum tortor, eget vehicula urna commodo ac. Suspendisse potenti. Nunc neque neque, pellentesque ac laoreet ut, convallis et libero. In hac habitasse platea dictumst. Morbi eleifend vestibulum fringilla. Aenean mattis metus enim, ac tristique urna euismod eu. Donec pharetra nec odio at porta. Phasellus congue fermentum enim, ultrices pulvinar nisl laoreet eu. Nulla sit amet mauris sagittis, viverra augue ac, aliquam justo. Nullam imperdiet, ex sit amet ultrices convallis, nibh nisl mattis elit, a aliquam turpis tortor eget erat. Curabitur volutpat posuere risus ut rhoncus. Nulla sed augue scelerisque, placerat augue vitae, tincidunt purus. Mauris auctor consectetur urna id auctor. Cras placerat dignissim odio ac feugiat.

    Donec sodales rutrum cursus. Nunc risus est, pellentesque nec ex a, luctus pulvinar leo. Vestibulum lorem risus, consectetur sed est et, faucibus convallis eros. Vivamus risus tellus, feugiat eu magna id, aliquam fermentum nunc. Donec ullamcorper tempor massa et ornare. Suspendisse id velit eu mauris gravida dapibus. Quisque imperdiet nisi eu sem suscipit, sed congue justo vulputate. Nunc semper nisl eget urna aliquet varius. Fusce a nulla ac diam viverra pellentesque. Ut sed sapien est. Fusce consectetur tincidunt ipsum vel accumsan. Proin fringilla fringilla scelerisque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean nec bibendum velit. Pellentesque id odio est. Pellentesque pulvinar ante non dui vulputate tincidunt. ');
    