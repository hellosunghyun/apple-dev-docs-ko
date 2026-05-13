---
source_path: "documentation/Accelerate/vimage/options/backgroundcolorfill.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vimage/options/backgroundcolorfill"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:backgroundcolorfill:0000:0001">backgroundColorFill</span>

<span class="ko-segment" data-segment-id="seg:paragraph:backgroundcolorfill:0001:0001">**Framework**: Accelerate **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:backgroundcolorfill:0002:0001">A flag that uses the background color for missing pixels.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:backgroundcolorfill:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:backgroundcolorfill:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:backgroundcolorfill:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:backgroundcolorfill:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:backgroundcolorfill:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:backgroundcolorfill:0004:0005">tvOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:backgroundcolorfill:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:backgroundcolorfill:0004:0007">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static let backgroundColorFill: vImage.Options
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="kvimagebackgroundcolorfill.md">var kvImageBackgroundColorFill: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">A flag that uses the background color for missing pixels.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="vimage/options/copyinplace.md">static let copyInPlace: vImage.Options</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">A flag that copies the value of the edge pixel in the source to the destination.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="vimage/options/donotclamp.md">static let doNotClamp: vImage.Options</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">A flag that disables clamping in some conversions to floating-point formats.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="vimage/options/donottile.md">static let doNotTile: vImage.Options</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">A flag that disables vImage internal tiling routines.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="vimage/options/gettempbuffersize.md">static let getTempBufferSize: vImage.Options</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">출력의 descriptor입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="vimage/options/hdrcontent.md">static let hdrContent: vImage.Options</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">A flag that uses HDR-aware methods.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="vimage/options/highqualityresampling.md">static let highQualityResampling: vImage.Options</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">A flag that uses a higher quality, slower resampling filter for geometry operations.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="vimage/options/imageextend.md">static let imageExtend: vImage.Options</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">A flag that extends the edges of the image infinitely.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="bnns/reductionfunction/sumoflogs(epsilon:">BNNS.ReductionFunction.sumOfLogs(epsilon:)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">A flag that restricts the operation to red, green, and blue channels only.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="vimage/options/noallocate.md">static let noAllocate: vImage.Options</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">A flag that prevents vImage from allocating additional storage.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="vimage/options/noflags.md">static let noFlags: vImage.Options</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">A flag that sets the behavior to the default.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="vimage/options/printdiagnosticstoconsole.md">static let printDiagnosticsToConsole: vImage.Options</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">A flag that prints a debug message if the operation fails.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="vimage/options/truncatekernel.md">static let truncateKernel: vImage.Options</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">A flag that uses only the part of the kernel that overlaps the image.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">*<a href="https://developer.apple.com/documentation/accelerate/vimage/options/backgroundcolorfill">View on Apple Developer</a>*</span>
