( function() {
	'use strict';

	var container;

	beforeEach( function() {
		document.body.style.fontFamily="Arial";
		document.body.style.fontSize="13px";
		document.body.style.lineHeight="20px";

		container = document.createElement("div");
		container.style.width="1000px";
		document.body.appendChild(container);

		jasmine.addMatchers(d2l.vui.matchers.jasmine);

	} );

	describe( 'ul', function() {
		var ul;
		var top_li;
		var bottom_li;

		var testListAndItemStyles = function( ulTagName ) {
			it( 'has expected class styles', function() {
				var diff = d2l.vui.differs.diffDefaultStyle( ul );
				expect( diff ).toMatchER( "list." + ulTagName );
			});

			describe( 'list items', function() {
				beforeEach( function() {
					top_li = document.createElement("li");
					bottom_li = document.createElement("li");
					ul.appendChild(top_li);
					ul.appendChild(bottom_li);
				});


				it( 'unclassed first item has correct class styles', function() {
					var diff = d2l.vui.differs.diffDefaultStyle( top_li );
					expect( diff ).toMatchER( "list_item." + ulTagName + ".li_first" );
				});

				it( 'unclassed last item has correct  class styles', function() {
					var diff = d2l.vui.differs.diffDefaultStyle( bottom_li );
					expect( diff ).toMatchER( "list_item." + ulTagName + ".li_last" );
				});

				it( 'selected first item has correct class styles', function() {
					top_li.className = "vui-selected";
					var diff = d2l.vui.differs.diffDefaultStyle( top_li );
					expect( diff ).toMatchER( "list_item." + ulTagName + ".li_vui_selected_first" );
				});

				it( 'selected last item has correct  class styles', function() {
					bottom_li.className = "vui-selected";
					var diff = d2l.vui.differs.diffDefaultStyle( bottom_li );
					expect( diff ).toMatchER( "list_item." + ulTagName + ".li_vui_selected_last" );
				});

				it( 'active first item has correct class styles', function() {
					top_li.className = "vui-active";
					var diff = d2l.vui.differs.diffDefaultStyle( top_li );
					expect( diff ).toMatchER( "list_item." + ulTagName + ".li_vui_active_first" );
				});

				it( 'active last item has correct  class styles', function() {
					bottom_li.className = "vui-active";
					var diff = d2l.vui.differs.diffDefaultStyle( bottom_li );
					expect( diff ).toMatchER( "list_item." + ulTagName + ".li_vui_active_last" );
				});

				it( 'selected active first item has correct class styles', function() {
					top_li.className = "vui-selected vui-active";
					var diff = d2l.vui.differs.diffDefaultStyle( top_li );
					expect( diff ).toMatchER( "list_item." + ulTagName + ".li_vui_selected_vui_active_first" );
				});

				it( 'selected active last item has correct  class styles', function() {
					bottom_li.className = "vui-selected vui-active";
					var diff = d2l.vui.differs.diffDefaultStyle( bottom_li );
					expect( diff ).toMatchER( "list_item." + ulTagName + ".li_vui_selected_vui_active_last" );
				});
			});
		};

		describe( 'vui-list class', function() {
			beforeEach( function() {
				ul = document.createElement("ul");
				ul.className = "vui-list";
				container.appendChild(ul);
			});

			testListAndItemStyles( "ul_vui_list" );

			describe( 'with vui-compact modifier', function() {
				beforeEach( function() {
					ul.className = ul.className + " vui-compact";
				});

				testListAndItemStyles( "ul_vui_list_compact" );

			});

			describe( 'with vui-compact modifier', function() {
				beforeEach( function() {
					ul.className = ul.className + " vui-no-separator";
				});

				testListAndItemStyles( "ul_vui_list_no_separator" );
			});

			describe( 'with vui-compact and vui-no-separator modifiers', function() {
				beforeEach( function() {
					ul.className = ul.className + " vui-no-separator vui-compact";
				});

				testListAndItemStyles( "ul_vui_list_vui_no_separator_vui_compact" );
			});

		});

	} );

} )();
