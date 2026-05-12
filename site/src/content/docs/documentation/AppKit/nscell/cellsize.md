---
source_path: "documentation/AppKit/nscell/cellsize.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appkit/nscell/cellsize"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:cellsize:0000:0001">cellSize</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cellsize:0001:0001">**Framework**: AppKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cellsize:0002:0001">셀을 표시하는 데 필요한 최소 크기입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cellsize:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:cellsize:0004:0001">macOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var cellSize: NSSize { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 property는 셀 내용을 그리는데 필요한 최소 크기(포인트)를 포함합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">셀의 유형이 텍스트 셀이나 이미지 셀이 아닌 경우 셀 크기는 (<code>10000</code>, <code>10000</code>)로 설정됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">이미지 셀에 아직 연관 이미지가 없으면 셀 크기는 <a href="https://developer.apple.com/documentation/Foundation/NSZeroSize">@@TOKEN_0@@</a>입니다. 이 메서드는 셀의 테두리에 필요한 여백 영역이 있는 경우 셀의 이미지 또는 텍스트 크기를 함께 고려합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="nscell/calcdrawinfo(_:">func calcDrawInfo(NSRect)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">셀 기하를 다시 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="nscell/cellsize(forbounds:">func cellSize(forBounds: NSRect) -&gt; NSSize</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">수신자를 표시하는 데 필요한 최소 크기를 지정된 사각형으로 제한해 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="nscell/drawingrect(forbounds:">func drawingRect(forBounds: NSRect) -&gt; NSRect</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">수신자가 자신을 그리는 사각형을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="nscell/imagerect(forbounds:">func imageRect(forBounds: NSRect) -&gt; NSRect</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">수신자가 이미지를 그리는 사각형을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="nscell/titlerect(forbounds:">func titleRect(forBounds: NSRect) -&gt; NSRect</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">수신자가 제목 텍스트를 그리는 사각형을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="nscell/controlsize.md">var controlSize: NSControl.ControlSize</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001"><a href="nscell/controlsize.md">var controlSize: NSControl.ControlSize</a></span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/appkit/nscell/cellsize">View on Apple Developer</a>*</span>
