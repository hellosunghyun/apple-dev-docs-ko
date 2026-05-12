---
source_path: "documentation/Accelerate/kvimagecolorsyncisabsent.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/kvimagecolorsyncisabsent"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:kvimagecolorsyncisabsent:0000:0001">kvImageColorSyncIsAbsent</span>

<span class="ko-segment" data-segment-id="seg:paragraph:kvimagecolorsyncisabsent:0001:0001">**Framework**: Accelerate **Kind**: var</span>

<span class="ko-segment" data-segment-id="seg:paragraph:kvimagecolorsyncisabsent:0002:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:kvimagecolorsyncisabsent:0003:0001">iOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:kvimagecolorsyncisabsent:0003:0002">iPadOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:kvimagecolorsyncisabsent:0003:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:kvimagecolorsyncisabsent:0003:0004">macOS 10.3+</span>
- <span class="ko-segment" data-segment-id="seg:list:kvimagecolorsyncisabsent:0003:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:kvimagecolorsyncisabsent:0003:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:kvimagecolorsyncisabsent:0003:0007">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0004:0001">Declaration</span>

```swift
var kvImageColorSyncIsAbsent: Int { get }
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0006:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0007:0001"><a href="vimage/error.md">vImage.Error</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0008:0001">An error that occurs during a vImage operation.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0009:0001"><a href="kvimagenoerror.md">var kvImageNoError: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0010:0001">vImage 함수가 오류 없이 완료됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="kvimageroilargerthaninputbuffer.md">var kvImageRoiLargerThanInputBuffer: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001"><code>srcOffsetToROI_X</code> 및 <code>srcOffsetToROI_Y</code> 매개변수와 대상 버퍼의 높이와 너비로 지정된 관심 영역이 소스 버퍼의 하단 가장자리 또는 오른쪽 가장자리를 벗어납니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="kvimageinvalidkernelsize.md">var kvImageInvalidKernelSize: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">커널 높이, 커널 너비, 또는 둘 다가 짝수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="kvimageinvalidedgestyle.md">var kvImageInvalidEdgeStyle: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">지정한 에지 스타일이 잘못되었습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="kvimageinvalidoffset_x.md">var kvImageInvalidOffset_X: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">관심 영역의 왼쪽 가장자리를 지정하는 <code>srcOffsetToROI_X</code> 매개변수가 소스 이미지의 너비보다 큽니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="kvimageinvalidoffset_y.md">var kvImageInvalidOffset_Y: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">관심 영역의 상단 가장자리를 지정하는 <code>srcOffsetToROI_Y</code> 매개변수가 소스 이미지의 높이보다 큽니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="kvimagememoryallocationerror.md">var kvImageMemoryAllocationError: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">메모리 할당 시도가 실패했습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="kvimagenullpointerargument.md">var kvImageNullPointerArgument: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">포인터 매개변수가 <code>NULL</code>이므로 허용되지 않습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="kvimageinvalidparameter.md">var kvImageInvalidParameter: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">잘못된 매개변수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="kvimagebuffersizemismatch.md">var kvImageBufferSizeMismatch: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">이 함수는 소스 버퍼와 대상 버퍼의 높이와 너비가 동일해야 하지만, 그렇지 않습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="kvimageunknownflagsbit.md">var kvImageUnknownFlagsBit: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">해당 플래그를 인식할 수 없습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="kvimagecorevideoisabsent.md">var kvImageCoreVideoIsAbsent: Int</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0002"><a href="kvimageinternalerror.md">var kvImageInternalError: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">vImage 내부에서 심각한 오류가 발생해 vImage가 계속 진행하지 못했습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="kvimageinvalidcvimageformat.md">var kvImageInvalidCVImageFormat: Int</a></span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">*<a href="https://developer.apple.com/documentation/accelerate/kvimagecolorsyncisabsent">View on Apple Developer</a>*</span>
