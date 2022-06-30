PGDMP     &    9                z           NGOs Donations    12.6    14.2     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    57696    NGOs Donations    DATABASE     e   CREATE DATABASE "NGOs Donations" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';
     DROP DATABASE "NGOs Donations";
                postgres    false            �            1259    65905    organizations    TABLE     �  CREATE TABLE public.organizations (
    id text NOT NULL,
    name text,
    categorie text,
    mission text,
    country text,
    yearfounded text,
    projectnumber text,
    image text,
    totalrevenue text,
    totalasset text,
    totalexpense text,
    totalliabilitie text,
    netincome text,
    netassets text,
    programexpense text,
    administrativeexpense text,
    fundraisingexpense text,
    workingcapital text,
    email text
);
 !   DROP TABLE public.organizations;
       public         heap    postgres    false            �            1259    65897    projects    TABLE       CREATE TABLE public.projects (
    publicaddress text NOT NULL,
    date text,
    name text,
    country text,
    categorie text,
    goal text,
    summary text,
    challenge text,
    solution text,
    longimpact text,
    status boolean,
    image text,
    organization text
);
    DROP TABLE public.projects;
       public         heap    postgres    false            �            1259    57697    users    TABLE     �   CREATE TABLE public.users (
    name text NOT NULL,
    lastname text,
    email text NOT NULL,
    password text NOT NULL,
    publicaddress text,
    type text
);
    DROP TABLE public.users;
       public         heap    postgres    false            �          0    65905    organizations 
   TABLE DATA             COPY public.organizations (id, name, categorie, mission, country, yearfounded, projectnumber, image, totalrevenue, totalasset, totalexpense, totalliabilitie, netincome, netassets, programexpense, administrativeexpense, fundraisingexpense, workingcapital, email) FROM stdin;
    public          postgres    false    204          �          0    65897    projects 
   TABLE DATA           �   COPY public.projects (publicaddress, date, name, country, categorie, goal, summary, challenge, solution, longimpact, status, image, organization) FROM stdin;
    public          postgres    false    203   x       �          0    57697    users 
   TABLE DATA           U   COPY public.users (name, lastname, email, password, publicaddress, type) FROM stdin;
    public          postgres    false    202   �P       �           2606    57704    users Users_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.users
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (email);
 <   ALTER TABLE ONLY public.users DROP CONSTRAINT "Users_pkey";
       public            postgres    false    202                       2606    65912     organizations organizations_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.organizations
    ADD CONSTRAINT organizations_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.organizations DROP CONSTRAINT organizations_pkey;
       public            postgres    false    204            �           2606    65904    projects projects_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_pkey PRIMARY KEY (publicaddress);
 @   ALTER TABLE ONLY public.projects DROP CONSTRAINT projects_pkey;
       public            postgres    false    203            �   ]  x�}W�r�]��5��T���(jVq��i����ݓ���@$H�M@ڑW���^�$��,ٮ^�&��}�{�A�-��b�f�2��O�Q���g�U���."������8�z�����7�w�9e47?]����(T�1H.tɥĶU��Z�[?�F�(�A�˰Q'�����74֌u��c�aǷ�jKl1��͓��`�w�Ю2��-��X��赙O��C#KnƁ�3Tޭ�o�Nhn�3�-^�����#gU�[�����}ܛ�b����ߌ�W�킳�Z�&�F�^Z�(�V��,��3��[#x������&����fi��`�Ӳ%��(��9��(�Y�D�[Fi��x�&W���ou'T��{(d�e��1����bBv��������z)�D~��(Z��l����èՠ0�{_�3�lOѝ��V���J8��Y�C2�)�H҃ʇ��R���� ��ڪJ~U�l�n�n::⯼���s�)�����}�]`��!��S��@RO���q俶�s3�Ԩ���^��5�����ʶ� �C�f8�h�RrW4ƴG/U�2j�� �(v3>�E`W���&l�㝰V�Z� �X{���4;r�дf�wдh� �:Z�8�?@Q\�x�Q� Gk�h��G�t�E���[<%igs�����*vq����������]��Ԃܗ!rЖ��W�T�)��:�Yc���+��ϪE�φV�ۂ6�W���,�M%���	_�aru���K��G���ܰ��I<H�2�Џ�M�t�;p*���V���o�o���|>��&CA���̎Xp�������d(��{�Z�Y-Y���>A�/�,���=$����iɖ�z�d�K�s��O��.^g�����j�W~o����}�S�J���-���LO^�ն!bK��e��	뙳0z�j;�MȪ��A���3.�q�n��}s�����������9M6xML�'$!8@�3
���cG5����P ���m��d��q�Fz�>�n�jF���G�Y�ߪ��̭p@~�D:�������["�ERZ�,�t8"� ?ն-�(�S�f�
Z���p5��w�[d�W�_t��
�BKAճU�)[Ey��U�塧< F�M	Do���׫y¾�s�zȏ����׫�k~������W�N�?9��e���
�A���3�v����ui�9��9k�'��h-��9�@�㸆'�&}pe�)
q����1�;SP6j����*)Ar�����2�2�;��B�|w(݂S�H�,�;=��h�c�TH!������E4H��^XT���`,,E����c 呴��)�9��L��T�a{A��"6ŉ 6g�; ˢ^�,A� Sb�x�Q�IY`,_G �4Z/��9��,[���7[��$Y�S��nT(�KtG�Ƒ�!��h*��ls��'�&��z���R�D����vѓ��3�^#�������S+�:��.=��+t���dK�將�/��c�'�����Q`~�p��ADOh�M�3�.�i��;��r�->�Ш�H�4@x�;Hm �@�Ae�Kc͏,�n�ٝ�ݱ�
Ҫ�r�P��zo��#������q-�{%��`��J��@��a=\&��7֘z�T5��S�)zq3�߃�@W�|c�g( ��|~H������,���yaAq	�8ZEם�%+]iK}����5��YHA?q+g`Z�ɖ)Ф�ǚx2G�L�lEt �#�3�<�y�Gq��yF|[3��:�m!�q:� 鈝��,)�Ƞw��z�.�s��ZP~I(-×u�F-!�H��T���?�mFS��x�n�� &e���D+ ĉ�����f���E��҉���ߥ4n��Q���k�I��	?�}<�`M��.��G���(��w����4$�#�Oj��4QШ�
Xײ���Ԫ��v|�xF!c�V�=�v��L����x�?�&�$S�� �S�v��H��?�u��[+H\�Bu���J8%�EP���	9^�F���q$�Oe��`�pխ�Jt�}ʼ&z���˟ݫ�� ��0y�J�ѽ(��8e��.ȫ#�|�>|������      �      x��}i�#���g�W�X#l��1`_R��k�G�J�/ɪ$Y�b]G�P�~㉈��bw���x�X���IVVq��ï��r��c����t4�W;[����dlg�魝����x8_������l�v2���z���1Ml�C���o�mQ$Q]D��0��Kk��j�fIi��݇�u���������z��p8���'���}ZEǲ���u�����o�cQ�Q�5�(֑��4ˢ��v�#����˴N��������)�.mU��wM��~��-�ї�TѰ?��1���A�eo#ZǮ4?�?���Q���l� ��)�<ܬ�2�/��g"���eS�pi��EU���F[Gk2dG3�h�%��_���ҭu�����qwE��7{(�Ӡ�io��)mTlϞN��.ORC�<���&X���� sͣĔ�׍Ź�&~�x6ibûJOU�zo1J�a�EA[͟�$Ic���vEn��O��2=��/ml�d���4�͇~x��eq�,�&h�h:�O(�BnmB�~�x�c?��&�l��z�$�5ibrz�E��[[��#��QIYw���o�(Q�I��j����S,��EqS�Ұn�@���:��Is|�A�\lF�)Ә~UҠ�ޔ�K�ПnAX�[�!M*y�gZ��fi�M���~�8Z4-'~ ��/�c:�T�FZ�i���DUA�L���6x�g6j��t{��^�������(�7o:B/pb�e�~�v���~%�jܮ5wɾ�63_e;��I�CJOڒ�/��^X݀��Cf= �m��=���iY���Q��f��Ұ	 ��)��LW���"k��ڲ�;���;��6/�!�81U<ыF���O2@n�FD��4q��l �Ek����rg��f���z*���G����r2�J��4�:�$��xx���L�	�wi���d>Z�7��j>�\܎:
c�v<~;V#R?��݂�l�]y����[zؘ͓��v��r}��M����������w_~�MfP׶:B:�0��X�e��qU��ا��ٛJ��=������kc�?���{뀴 qE=X{�l�LN����'&����M�V5:r6�bQJ�b��g�H=2�yV�+��ftO��PQb�������L:}�TE�O���H�>�j�8�PeR�Zo��({s�Y0�(u���QH�M�5?������>��v���e�o+��.��U����(ߘ�Y8Y��L*. �(���/=�ԓe����lci��>,���p,2�lU�ӧ���Īi�� �Y��+բ�����ݾ{`�1�~G�x	�ǻ��Ǧl5Bv�6mM�,�-���������k콟�є���ΗN�dMBӨ���2%j��"�X�����������XukL'�DłQ6��g%���K�&MV�I�9U�	�	kyD���$qLI�f�.���TZb�3}S���GtVUe���	mh?t�H���SLF['�%��x,J���Q	�m1~ٔ�Eˈk�s�)mlSl�p��h��S����ۧ�T��!���i��N~,����>�H@Fߓ��x~m�3;�J��D�&�_�$��VS��
�XK��._�:��x	XtH% ���LN�o�l�* �vj����^Pl0>�T(�Jir�-�<�f�ږ�i�gNl�=1�D]n��qK���M��(u|�g�
(���|M�s/��D^7����������y-��۞�ژ~ZB�uX����h�VH���2���_�y�*Y�3E9Q*�������R��Jy6�Og�!)�ݮ�'3����l1NG���Č��v_�7���x:;Sʣ���d0�R���A��U1Y���l��#Y�������������~�r�-H�n��,��H�К�� �|P��ŉ��t-�i��!��]6��h��%�@��)�G����+��hJ.E^�8 ��Hi�t�1tJ�V�X`�~����--9`���IG����<g>�A�oO��,�V�' �4c�r@�*�D8�~����W�Ѫ�=Y��Lv:�'�z�i_0/Ր�Ǧ��[�/B���m�f��b������>:@Q�Y�d��3V��}��NZ��$/X�]]��,�~>���5���4_#G�3e�9������vl�R���{)'�$�t���8�2?�����H�j�e�4G+b��_��� ��Ԡ�{����|��<���	=������u���6(
2��.@�U��j� 5[��P��Io@H�� a�pF��nSf^$����89����Hd$J��/��WNL '��.	��v�4@}��?��~X�O!A�a���<kH/$O�>��?ɾ���IO�X��azl8��|k9�A!./r2��w�`fJr�x���Ѥ+��4L��S�o��iP88����}�(�smA'���Lƻ(}>b0���ROҸ�p�e��N����zEͮ:��j�ZǤf��v3�ǋ��\on�x�����6����t�����xn��,4�h0����%����p�<ë�l b���p�m��������w�3�w��CCO�3eY��-	3>pY+�,��Q��v)�dL"�I�/�VMY*�
��A�KQ>xO�5 ��1����� C�~eb�7'��e��c�xd'Q��)>=V�Lr��h�2�h3�ks�-�scI��6�|T��F�"%�y�:"ޓ�Y���dK�����ʈ��=��OIS��e"	Y�yZ�顪��$4"i�ГFiT�)�o��s�<�DD���ɚìS��.����9#�1n�V�0�����@J��Pi���/��Xnp A���a����!�yd��B9p�`X"�˫�?�]��@�����e������U	�:	޻����c�#%��50��D����.�?֮�l8f<̔ i���Ԓ�'�F}��&���l\�`��b�t�a�H����^��[v����}B`�؁��#���hz������9�#��F���D��q�O�ʎ�x�9���c'ME����<Ϝ�B�'�-�/�m�َ���үXP��Ԇf�������@�:��8������m�`)-�v�,�	�;��zP�^
!�� Y�*#�{iTu�
�$��R�8�9"�����r���MY'�*�+;!��a��B���$c,{-8m����.�f���t����˗}���h�Z���(���ëxxy}��Y]�G��,�.��əқ��NW��ǟ�/��m���cM;B[�Տ9nHV�������]�s<A�׍��W���m��Lt�Hv9+r��K(\����B�J��H���RfwH�p�O2E��=�8UI:���dK,���#�A֘E:����Mvr*%�x�B��L��r�{gS �R8�W/
џ"Ӆ�*+g¾32���6�)C�ĺ��=�f��)��}�8T���6�́èʭ`h2�h�	!�r�Y^���7G�MVvN��T�|t���ѻm���� ۖ�C���ED���[9�&S�����]�ۯ�#2�Ӱ�8�5��H����^Ύ��F	%(j��|#�9�F�_�H��^�l2�G@����L�8T�����dj���!�A� �UvS��4�Ë�HR�H��P���t�iu��<����~#�o����-��j��3����oG��X�d�Y���.�r5ͥ���<���ϯծL�w���o?'F���u;z٫�n�׋I|��$$kg���pv;]�Lƫ�d�\&v91��<�������d5��~��?h�S���v�&,���6��m��j�z�o����ǳ�{��d��HXk����h�9�d8ᩜ�`��̢U�8%�G�31D���_2s0�����~��~M�b�:�'x�2G�j5(#Mv^s��)i��{��i�<e�A�H	�kh��#���=<μ��'k2`�6}fa}�C�(�^��`��>�B���۽�����HT��i�i��qz�R���@#�;+oU��$	�&��Z����1H�qV�xqr��j Z��J�4�>����    7�J�YF�n���7,�tg�A���?�&;��Q=X�ޙMA�g�����a_���#�T��s��ͲO�#��2TrR)�� Feg���@0N^�ek9ΐ�H� L�ܫ�,8:Ԫ��G;�g3��3����ߺ)���᫈Qnͳ�p�a?�&��8z�N�Mr:��)Z:�����9P�2� �_	ft��Ȓ�A���(��,.H���A��%�����(,��Ji�dIJ1�}=��$��>B 8���ƪ�@�y�Ӂ��eZ��y��Y���!��B� MT�C�u�� d����A��[���/��&"CY=�[ip�����E�ְ��Naږ��2����g�r������V��Rt�DZa�ȓo��i%˹�����C�>f��OD!<�>�qÂM����Y���@�ěs�m �=�5Hr��3�U�A�N$9�w�Xr^B}����`C4�͉S$N��H��I�1>�DN��r<�=���
��@�*$@B�� .2��'L//��M��ISA�`W W�au�<X�\QEbx-XĜ���Fu&���+&���@���z�LƳE���Y�����l|=YN����|2��V������L�Ά�ш|�w��ꁤH�����pLt_4�=�-9,������W�t��� ��"q��I�P�$x7�,���� vܚ�Ёh5�x�0��n���iD2��}	�2æ�B�Ȱ|�i��]���Ľ��s[Z��%�v8�B��,;>5dD��Gd�ϖ,Ɯ�&�I�2���Y%��� d��ڎ�}�A�xc=cgsM���&ḹ��	t��!��x�$�b��4����<h_#% X�"��"O�Ty��� ��9��)��md��g_Z�&O�F�9$��C�
[ _xO��%�"�!Gn��,�jr;מ�������$��<#M~����YcF�)@j^A[FW�+O�vg�:*�`�5*e�!���=�ŲA	�K������'�P�4}d5������QT�@D�9XN����׌_�P�Ro݆��r�y���1���At�_�Ui +�5CP^mU��fk���'�ء
0#-�ó����b��h��̉���uZ�2�)O$7�$�τ�T4��0����ca< !��9{3K�T��h�[��T��U�l���I�$���������@<;m�f�JS�/�H"yi��I�sa����=����S��H�S�b��,!b�-�˴ek6 �$2/��^>S_�����O����΃������}^�O��I$^��D�e{�-��:�D��'Ŵ�,?��/+z)�B�
5�%m��"@2���Ї��ht�n�d���I��d).�OD"���
8�,p�2�H�c�b���R�N�mi ̔�}_-v@��W����1�-W����l5�%f5\��b=^M�g��xoo���2�Ηfqs���.���.�*0���ן�+oD+��E�o["���xۼd`�#���j�������ҁ�԰;�y5�.�J�#�br�.T��9�����=gUt��&k��)5����GN���J���t��5�Ó����('pT/J�Cx>1va��6s�� k^Kr�~D�
��%(r�$i�M����B�h��q���4.�P1���H7B��˦! �,�鿌�	'*SC�p:��������~#�B bۂ������i~+�ŉ��N�x(�>ƙ��S��E��(1[��1� ����H�P�V�K�@�XZ{*���3W<e��v�;�����+\-�ҁ��!�i5~	���6�@g���s[g:=�9dbb'�^��绖�}e� 85f��.SM�ѻ�a�sxM"_�RxN/���Գڤ�Z� �j8�, P�ؐMZ�`_�%�����#)v��Mnǰ~��O�����,����G�f]ҸN��ɉe���Ms��e����1���o��
�m�����q���������F�o�wi&+&��1��p�.��M
X�DK�u^�.�W��]��K)H�Fs0�?J��R�����5	b��P���
�Gɀ��O��ثa#�IY�$�VP@-B��>Z��K�Σ簍�8r� m�\~ ##�ۦ�@��.4��}%'2X5#,�Y#Q((G�AD�e�}'�a�O�I���1?�boM�D� �Aȣ��� ���Ck� �#��1�dv^M�,:I��r<^��(N���fy����t:�l���o�7���d�,V��LF�9����|0�M~�ݐ3�QtÜG���kF���d��q���X�ܸ;�2E!3��c��U��V�q�͟Y^ȏiSr\�9���yt�Tj��r�x G���t>e�>�y��+���������Y�;���/7��N�U��B"�2Ǣ�vi����6����9���1%��z� S�WR�q�@�M�Y�'��4��uqQ<[�/�3K7%��z\[���3�� rmJ?�T��eJN98J�JG��.� {�Gq@jx6��#-�8;�1�;�5�k=3Ǳaܟ%�)%1��A@}�Ud�Pl�ݢ���[��n<�-A�B��$-�Rk������;�yFy�f�Y��*�d�a����!����k��Z�.�9`*\ .��@��Tُ���8���,Q^Mp��o��٧���E.E3%����U�������dpw�R=/��P�ߋBF����\��z:C6M�y�N{Rh�U ��E"j�����=�3��b�M�Qa��'ƚ��Ũy�l0�Z[�~"�D��{�XÈ$QS�A��VO��2m�,8@���f��7{�w�"^!ͼ"M4 ��w����R�!B��2� �⢴j����Z8V�N$Ll���<I�rd��b%)���&�c��@��wϩ�W�we�V�2c��R�Qc�}i��2�W�������f;��'�x���G��p6�su;�MV��l{}uy}9;�#�WoG��x�������G�'�<�Y�����w� ����廻�g:�v�����i�q�.�������[���w 4�"��^ ��)�����a�s)�!�#x+n ��;�W2o��x���BA�	E~������gZ���֜*�t�hDJ�ͅ���n�!g���6���ɰ�:��%j��̇����e��v#5���J9�`��^bR)kU'\'�F)#6�T0tNr�"�hH��A��1�Bj[�����gu�F^SJk�"�Bs�nR��A"�0Z�8��~lyFF��8-NVV4l�-s��B��؞�k�&I�DK$�SKDY4��c���
Y&rr�٪-ʹ_�`Qi�����Vg�Zu�����\������Wl�b2}����҃%���j~U�5>�������{n�D�ktীƷ���B��]J���"�նpn����ʙ�󀪵�Y�(A=<,�v���sd��Cn�����s�aCD��(]�Z���nI�W���ԛO��Blb��Bg�5sHF[?,ݓR� z쥑�0ې���,K7�Mn�ڇt�L��%�QuB�b�&��8D6�z"NےwA����I`�2��
k9I�B)���7����E3� /y���WOR��l<�˅tq� ��qu֡�G\�dG׃��oa��
�U85/'(5�~�!�/][�l�క,X�
W,��>'��2���ה��e]�^_&��x1[��j�����j~�ث�r8]%7C3%�{�B�����z��F��;����W"�:9;xo WIZ���~:� �Z;�����@d':ԅ;Z�W�m��A��,��(���L�H"-�V�wk��.� �r���s���9��gSpE�n�YP��Y�P��.^��l�PrF�A��KK����6k�I�P�C�T�WWo�B;��U��֦p)"�ߙ���Sʱ�b[s�'	���~4i���G�m�#��i��Fi�ҫ�������ہ~x�h�Ѥ�r+͂ëTP������'�KR��$�� M���	V�xd[�?�v
(�F�L!�̯�a�3_N���"���    /��_��� ���t��'���T/��椎��g:YCve\^%Bq�`V������\+�Nָ��:�b��h�"U=�x�6c,jٌI}Wd��\^���;�|����m�S�(E��.|�i�0@Ԋ]c~T���}Dݟ�Q�,�w�hȷ.�|ڑ������;��-R`���Y���؜��Łý]7�5Y�}�t$r����w%F��9�^��V1�;��t8���4D%����[�T{ݽ��܋j�Z���j�L�v�]L���v1]-�Wf1�F��*����qG��.�n^���芁����r��*5=���b��?�}����͇/����m����I9���
�alՅ= {g!���C���q��ؗ2劌����>s1����K����S���yZ���Z����򓸈��
t&�}ɚE�;����P9�:�s���+��	��	�g���]-��<Ov;�8�"��ZV�����I�< �z�w%j{��@�P�t���k)bY�w��N����L�7c�Z��(kA���i��*o��F��Vb�;��ge��ȵ:� m�ث�7C��x�}%Y��wmd���E��2��M�=�u����o�NC��zV����-y��kȍ �9� ;Vq���Iڰ����F�����z2Ȭ�=�B������OQ�@,⃭��8F\��ޱ髎^A�^�������#�l��"#Ɋf k����y�y��e -um�9����Z'�x�����8&!�s��6�}+59/7��Q�[�͟5}��B$Ȩ�"6ʵ_.���_��B�����xq���6��\�,ת2e��{�s4�ŝux�5R%���N��&�O�9�@��C��H]y���af.?���H��%�1YG�,��i���w��Z��X��"nʾ6��}�+b��p-�C��n/\aj�m�S��I�f��q��Wr�(�)v(�<+��G�zHl��V�����������~0�Ҽi��ϯ��N0{>�NGs"�.�����dy�L���v:���b<\/���f�G������,����b�1�9�g��X$V�퇄o.3X�������u��J�V	&�(5�u�gB�ҍ̽�7 ���)1*��G��Ѽ���G����MGZ�a�}Zq� �&w�F�c�dn��'`�D?��|��f8l���|�~,�`�w�3���q�M�����Ah��V�x��(�`N��.Q`Ԅ�5m�Ls�RU�S�u����Ql_A0�_�M���v���*h��J�)� ��.�DW˶������NK������3>?
�&v-/F����&o*iO��h��,������h�QV��w�yr��eqa���N;��s�RB���E�nn{8��1��^�>�>���]��Hϱ�]	v�Nݼ�������ue��h�mT]O�j�:k�-�2"��	*���Pa�l*��DC*�m�{a6�4�
!���gb�:�IQ���܏�>~���qP����`E����~%��:r=�ж"�T&���߸�.,��I̱v*�Y`: ���s۸�,��6���-HW&����&'��-2t��R�"JbHU	��(L�g��9��F2�2��c6]�����|�:��)V+=X6�`��} �C|~=N��ŅZ�b"���7� ~r���7^���OǉE@+y��f#D��z�\6���o.����DF�� fl���J�B+�¡��� �!�1�^{m#�v�l*�hM�)��LiOHU��@ MD��)�ə�T���nI�q��Vgl��i��p�$��ʪ�,5c��C_IH��9D)��(���!��izM������fCG���jP���k1]�=�"3c���ֳ������y<_�Gcs9��.�C��7����zrff�'o���p4��W�5[��������n�\:{��;�#�2�$�2@�:]�/�� ��s-G��aS$g�L��9u��(��肖�ܗv����������̗�$Mh]���n�a����҆K[s�lr��D?���� �����F��Yo8Pi9�Hom�K�R��F`��7)�7���R��.��i�k|F9l!�Ks��߫�Y͜���Aϝ�ϟ��t�N�>q���Sz�gk�.Z�F8��w�zj渡�Zۈ�[���W�g�Y�n�g��$�6��;��K�I�-�9�!e�����ϊ��9���rXh"mL��3�Qt�&�PZ�m�\��_z�1eܥ�Wug���MQ=O��8s�l�[�6�A`�f2�f�s>�2->�N���h��_�F�_ph�{�Ӏ�;� 7k~�I��MP�M�W��ڶ�v��m�C��%�|NZ�!�=�ᰪ�۽�t��0��۷�8���
���P�R`�c�<���IZ2��8�VHu����垛j��@����qҿ�:��2å(lB�0��+���C&t��]�k�.��/p��Hm���t1��ɝ�>hT@�Wڮ�ҿ6��v��Lsv'w��h'ڮmG1� Zv>@2 �%8A����r�BZu�<H:�9qN�p�bW�o�����_��F�`�|\������krۂ��z���Ze<����njy�¢�X��������X�����v1�^oWWɘ��l�Xߘ�l8�]�+�������tu�Fm����h��*�u���ν���l�ӏw��>}��ps��g�q����w7?���I[{�����\�#uQ�"̏�{`.��2G���/�(	B�z��*"<z�p�����x��3K�:�F��Í�!}��_�:�u��Ʒ�r��Z��G 9�ل��ԥF�S�����%�����8@t������.@�p3�:q=U�2�')��2Fp�L�\w��'�4�K���_�ES4�Τ�����
NR��4t��ޚ3��S�r�\��U��߉���b��46]�3�|gpb�'P�H�hٞ� Z�VFHCN���1��&*��ﯸǚo��!6OZ����ڝ2����,�wרu���e�~!�w6�u�T���_��*�D��*���l�/�r�J���oS5\Ctp��m��<�}��j!���B����`FT����Px��1���]�D�b��)]�e�J������p���-�K�zX&�ւ�Ʊ:���T�"�N[��n\q��~𨉳����"i� E�L�V�n�h�呲;��YG��mڇ9�_j	'�y��T}Bt����8�іG[�At�FU�h�'- �m�����S�Q�&|;@FYׁ�!���75�}|�����﯁���I�؟���w
V���������W��t!!
�x���r��Fp�� A���RF�u�/:&Jة��Cr�d���vFKRg/	C�Z@��I�)}�ebPr�ʺ��]2Ig�tC7b����Q��߻oC�1̢ f/���2��uO"��|��d����1�1���h{c:�m���2���hkn�7�ؘars�>B����d�|֫|2{;^�f�u�_�/8����:D���(�����꼥���v?F��
�t���V[`4�7yM�e��wĵ}�Ip"i"a��0-y�s$�A����ep�V0tؓT&�(e  ��Fb��[CEo�����>;{�Q�.��i����`wv�aWº���u��=�R��9r��q~����f��s��r�W �ݤ����E��94I��	`�G�B���[߁ݱ���!Iō�L��6I��Tw�����\^�*j�wP��-R��R��6m�:-�G��+(h�chd���[]�;ʮ�ޏ~/6�I���v�,�2L�Y9z�J0�y���!��>�T/N�#U0�K���	/n�A)��0�xv(��s��]rBc��aq�����鼎M&�����!�яᙩ��\�(IB�CŹJ9I��D�{����7�[sd���z���S*�� pB��ݖ�́�K!��)�5R�Τ�.�����D�6D�"��
�PY�� ��;�v��N�"ڙ�eB�7L�9?�3��<Z���&��7n�����:}'q��풫#��i�����N؁�[;
��N�@���!�� P  ��E�}�Zu&�:����|dCowcЋL��@˗�.���f>�L�˫��t8�ͯo����f�6��"^m���g��M�Ng��j�.wD�s�f.K�G��.?��{ׁU��B�ۊ�z#�qi��7M{cF�k�LIaM���zI��R(�:����P�s�+k5��5����r�M��i#c���� ��d+��B�)��n�"�Y h���ZJ��.��}���i��iq��>e#J�p��]�w�r [�])�7>w�|�Җ�ȭtr��7;gJF?t�s��m{Wq��F�R~�te��2+֪����r���L������I�0M�	�k�h��g������ Qf������q�lW���El�v�C<$֛�~��aHi��F+�S�]s�&�oA�2#�d��Z�,B�86���)��A�_R�i�yW48�Ol���
��I�:����NO�)qq��@\|�\+�x�/�D��k��R�B'iՎ -� �k!�߰p%�(AW�����$۩_��d�;7^�n"䵹oU6�:�����]\�̀���F�/��p8����m�{��2���΅��ogH�@�
�j��Z�y��7�z���6i!.������#�g�4l��"��q��mu8���ՁG�UdT �R�#c�x�Z+q�݈A��Tס�#H
(�p[åDQaY�R��O�4�������	�m�93��~�;H	'nH��?NUq�Af Mvh'���M����W &�;����ők �}0Q���6�%�-R)#:r�<#aZ�U�2�VN�jŧR��-�N{���QVҡ4�!"^��>c2����b����3S�}H��{j	����� Pw���%�[������͊ҐZp})��܌�����=�����8&/C-���l6^�Ɨ��h9Z���x~53����f1��^������<'2};f��o��j�ۓ`�^D���W����#?�u�/�e:�\�B��Zة�1�9t���F-�%v��$ؘ�9��b�+D���γj��9�_���4q'�$�?�;A����y��&�a|:ڏ�7�ڟ m8�а���k��T�kėl�y�y�@8��D�P���p�D�IMN��<����vJ��yT�X$2XI�o'�\B��������@��ׯ:Ք-���'g H�읚t�ܞ������=vB�%Z%�'&�r�����W�iz��$��K��^���=��mPW��\��3iL>,w��{2a�pł�HW�f���pZ{���}]��5Z��H���\�o2R���d�[ypWO��~}:��.һ2rY�Y�%���4W��F�� �������[	���\`�{l^���`R����'������ x�Eh���X���2����˙�*��������9��\%�^�{j���߳|~TZ �1���g�ZV�2�W��N�b��f�9�T�]�rG7U��.�n��E���_s�=�*weBa�����O:�V�G�zFa�rF!��n�����.���,FX`�\���z����0���nFg�z:{;^� F��j�4���j��}j��m+O�[�Z`����w�Dd���ٲ7	�������X:lw�Mb.wk�"d��̐6�I��	8�~���'ٹנ�ҤhF} T{��c�A6>$S�}1�Sjp��3�`�%WjQ��ey��a�Ok��Q �ݏ�}�\���w��v\E�}�����{�P��h��4XB4���᥃�F�Qmz���/���F���C&8��'�䠗@���W� WAI!���L����[[�}��&��c�B�-H�f ݠ����?ˢ�%�� �h�@����9T�7q��+�ȞZ��tn��a{Ƣ�ۜ$kw��l{����v�s���B^V�3��C��.-
1D�8�H��9�A��q��x��؝�AМ7�A
q{	E� � ��Ԧ�mgNQ���0;�ڮ��!�R�� �l��b���Q�h|�V9��hGTO3��]��阰v�.���.4���K�Ww���}g��K��%�����r���X���Kć�'�V�E�
3w�
ds�)J풨�,b���y�/���=�ӟ�� �O��      �   �  x��R���0=�W�V# ���Ug{h{�����(	mw����k�tW�������Y�ALR�����~9��<]si�;� ��5T�.?�$����	k��Ǵ�2E@�������L����Ƚ�;o#�8���ݬ{P�V��8�y�����0V��"�;rB�J�~�}���U�+��Q,��7�d�нS+=!��[{O����Tx!�EA0.�������pWhY�%�S�F�,b���M��2;�:J���Š?!�ɷI���d��Ɂv@ᡭC~��@�vC�yQ�jpx|�R��w�H!�Hu�y^��Z_;Rȟ���l$���q�n�1���oΩˋ��'
-A���ݯ���S%E���8�m�G�]M��u�U��8Ǵ�Er=��.ÿ�9     