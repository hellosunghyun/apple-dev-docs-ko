---
source_path: "documentation/AppKit/nsbutton/isbordered.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appkit/nsbutton/isbordered"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:isbordered:0000:0001">isBordered</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isbordered:0001:0001">**Framework**: AppKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isbordered:0002:0001">A Boolean value that determines whether the button has a border.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:isbordered:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:isbordered:0004:0001">macOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var isBordered: Bool { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 속성의 값은 버튼에 테두리가 있으면 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_0@@</a>이고, 아니면 <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_1@@</a>입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">버튼의 테두리는 대부분 다른 컨트롤의 테두리처럼 한 줄이 아니라, 돌출된 베젤입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">기본적으로 버튼은 테두리가 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0004">버튼의 테두리 상태가 변경되면 다시 그려집니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="nsbutton/image.md">var image: NSImage?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">버튼의 off 상태에서 표시되는 이미지이며, 해당 이미지가 없으면 <code>nil</code>입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="nsbutton/alternateimage.md">var alternateImage: NSImage?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">버튼이 on 상태일 때 버튼에 표시되는 대체 이미지입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="nsbutton/imageposition.md">var imagePosition: NSControl.ImagePosition</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">버튼 제목에 대한 버튼 이미지의 위치입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="nscontrol/imageposition.md">NSControl.ImagePosition</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">버튼 제목에 대한 버튼 이미지의 위치를 지정하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="nsbutton/istransparent.md">var isTransparent: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">버튼이 투명한지 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="nsbutton/bezelstyle-swift.property.md">var bezelStyle: NSButton.BezelStyle</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">버튼 테두리의 모양입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="nsbutton/bezelcolor.md">var bezelColor: NSColor?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">이 기능을 지원하는 경우의 버튼 베젤 색상입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="nsbutton/showsborderonlywhilemouseinside.md">var showsBorderOnlyWhileMouseInside: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">포인터가 위에 있을 때만 버튼 테두리를 표시하는지를 결정하는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="nsbutton/imagehugstitle.md">var imageHugsTitle: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">버튼 베젤 안에서 버튼 이미지와 제목의 배치 방식을 함께 결정하는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="nsbutton/imagescaling.md">var imageScaling: NSImageScaling</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">셀 이미지를 이미지 뷰의 프레임에 맞추기 위해 적용되는 크기 조정 모드입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">*<a href="https://developer.apple.com/documentation/appkit/nsbutton/isbordered">View on Apple Developer</a>*</span>
