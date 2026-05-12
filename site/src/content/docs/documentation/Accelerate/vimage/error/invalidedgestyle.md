---
source_path: "documentation/Accelerate/vimage/error/invalidedgestyle.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vimage/error/invalidedgestyle"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:vimageerrorinvalidedgestyle:0000:0001">vImage.Error.invalidEdgeStyle</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimageerrorinvalidedgestyle:0001:0001">**Framework**: Accelerate **Kind**: case</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimageerrorinvalidedgestyle:0002:0001">지정된 에지 스타일이 유효하지 않음을 나타내는 오류입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimageerrorinvalidedgestyle:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:vimageerrorinvalidedgestyle:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageerrorinvalidedgestyle:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageerrorinvalidedgestyle:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageerrorinvalidedgestyle:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageerrorinvalidedgestyle:0004:0005">tvOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageerrorinvalidedgestyle:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageerrorinvalidedgestyle:0004:0007">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
case invalidEdgeStyle
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="vimage/error/buffersizemismatch.md">vImage.Error.bufferSizeMismatch</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">함수에서 소스 버퍼와 대상 버퍼의 크기가 같아야 하지만 같지 않음을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="vimage/error/colorsyncisabsent.md">vImage.Error.colorSyncIsAbsent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">ColorSync framework가 누락되었음을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="vimage/error/corevideoisabsent.md">vImage.Error.coreVideoIsAbsent</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">Core Video framework가 누락되었음을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="vimage/error/internalerror.md">vImage.Error.internalError</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">vImage 내부에서 치명적인 오류가 발생해 vImage가 계속 진행되지 못한 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="vimage/error/invalidcvimageformat.md">vImage.Error.invalidCVImageFormat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Core Video 형식이 유효하지 않음을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="vimage/error/invalidimageformat.md">vImage.Error.invalidImageFormat</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">지정된 Core Graphics 또는 Core Video 형식이 유효하지 않음을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="vimage/error/invalidimageobject.md">vImage.Error.invalidImageObject</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">지정된 Core Graphics 이미지 또는 Core Video 픽셀 버퍼가 유효하지 않음을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="vimage/error/invalidkernelsize.md">vImage.Error.invalidKernelSize</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">커널 높이, 커널 너비 또는 둘 다가 짝수인 경우를 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="vimage/error/invalidoffset_x.md">vImage.Error.invalidOffset_X</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">관심 영역의 왼쪽 가장자리를 지정하는 매개변수가 소스 이미지 너비보다 큰 경우를 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="vimage/error/invalidoffset_y.md">vImage.Error.invalidOffset_Y</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">관심 영역의 상단 가장자리를 지정하는 매개변수가 소스 이미지 높이보다 큰 경우를 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="vimage/error/invalidparameter.md">vImage.Error.invalidParameter</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">함수 매개변수 값이 유효하지 않음을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="vimage/error/invalidrowbytes.md">vImage.Error.invalidRowBytes</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">버퍼의 row bytes 필드가 유효하지 않음을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="vimage/error/memoryallocationerror.md">vImage.Error.memoryAllocationError</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">메모리 할당 시도가 실패했음을 나타내는 오류입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="vimage/error/noerror.md">vImage.Error.noError</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">vImage 함수가 오류 없이 완료됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="vimage/error/nullpointerargument.md">vImage.Error.nullPointerArgument</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">포인터 매개변수가 <code>NULL</code>이고 허용되지 않아야 하는 경우를 나타내는 오류입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">*<a href="https://developer.apple.com/documentation/accelerate/vimage/error/invalidedgestyle">View on Apple Developer</a>*</span>
