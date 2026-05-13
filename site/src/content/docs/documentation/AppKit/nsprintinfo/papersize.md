---
source_path: "documentation/AppKit/nsprintinfo/papersize.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appkit/nsprintinfo/papersize"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:papersize:0000:0001">paperSize</span>

<span class="ko-segment" data-segment-id="seg:paragraph:papersize:0001:0001">**Framework**: AppKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:papersize:0002:0001">용지의 크기입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:papersize:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:papersize:0004:0001">macOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var paperSize: NSSize { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">크기는 사용자 좌표 공간에서 포인트 단위로 측정됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="nsprintinfo/dictionary.md">func dictionary() -&gt; NSMutableDictionary</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">인쇄 특성을 포함하는 print info의 dictionary를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001">[init(dictionary: [NSPrintInfo.AttributeKey : Any])](nsprintinfo/init(dictionary:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">지정한 dictionary의 매개변수로 초기화된 printing information 객체를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="nsprintinfo/topmargin.md">var topMargin: CGFloat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">지정한 크기의 상단 여백입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="nsprintinfo/bottommargin.md">var bottomMargin: CGFloat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">하단 여백의 높이입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="nsprintinfo/leftmargin.md">var leftMargin: CGFloat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">The width of the left margin.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="nsprintinfo/rightmargin.md">var rightMargin: CGFloat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">The width of the right margin.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="nsprintinfo/imageablepagebounds.md">var imageablePageBounds: NSRect</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">The imageable area of a sheet of paper specified by the print info.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="nsprintinfo/orientation-swift.property.md">var orientation: NSPrintInfo.PaperOrientation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">The orientation attribute.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="nsprintinfo/paperorientation.md">NSPrintInfo.PaperOrientation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">Constants that describe the orientation of printing on a page.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="nsprintinfo/papername.md">var paperName: NSPrinter.PaperName?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">The name of the currently selected paper size.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="nsprinter/papername.md">NSPrinter.PaperName</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">The type you use to specify the name of a type of paper.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="nsprintinfo/localizedpapername.md">var localizedPaperName: String?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">The human-readable name of the currently selected paper size, suitable for presentation in user interfaces.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">*<a href="https://developer.apple.com/documentation/appkit/nsprintinfo/papersize">View on Apple Developer</a>*</span>
