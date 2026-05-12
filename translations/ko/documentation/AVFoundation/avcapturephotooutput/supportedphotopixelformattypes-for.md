---
source_path: "documentation/AVFoundation/avcapturephotooutput/supportedphotopixelformattypes-for.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/supportedphotopixelformattypes-for"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:supportedphotopixelformattypesfor:0000:0001">supportedPhotoPixelFormatTypes(for:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:supportedphotopixelformattypesfor:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:supportedphotopixelformattypesfor:0002:0001">지정한 파일 형식에서 사진 데이터에 대해 지원되는 비압축 픽셀 포맷 목록을 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:supportedphotopixelformattypesfor:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:supportedphotopixelformattypesfor:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:supportedphotopixelformattypesfor:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:supportedphotopixelformattypesfor:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:supportedphotopixelformattypesfor:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:supportedphotopixelformattypesfor:0004:0005">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
@nonobjc
func supportedPhotoPixelFormatTypes(for fileType: AVFileType) -> [OSType]
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">지정한 파일 형식에서 인코딩할 때 지원되는 픽셀 포맷 유형의 배열입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">사진 캡처 요청을 발행하면 이미지 데이터의 캡처 또는 인코딩 형식과 해당 데이터를 포함하는 출력 파일의 컨테이너 형식을 각각 별도로 지정할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">그러나 각 파일 형식은 특정한 이미지 데이터 유형 집합만 지원합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001"><a href="avcapturephotooutput/availablephotofiletypes.md">@@TOKEN_0@@</a> 배열에서 파일 형식을 선택한 후, photo settings 객체를 생성하기 전에 이 메서드를 사용해 호환되는 이미지 데이터 형식을 찾습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0012:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0001"><code>fileType</code>: 형식 정보를 얻을 파일 형식입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0014:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001">[var availablePhotoPixelFormatTypes: [OSType]](avcapturephotooutput/availablephotopixelformattypes-3ydgm.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">캡처 출력이 사진 촬영에서 지원하는 픽셀 포맷입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001">[var availableRawPhotoPixelFormatTypes: [OSType]](avcapturephotooutput/availablerawphotopixelformattypes-9t9k5.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">캡처 출력이 RAW 사진 촬영에서 지원하는 픽셀 포맷입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001">[func supportedRawPhotoPixelFormatTypes(for: AVFileType) -&gt; [OSType]](avcapturephotooutput/supportedrawphotopixelformattypes(for:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">지정한 파일 형식에서 사진 데이터에 대해 지원되는 Bayer RAW 픽셀 포맷 목록을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="avcapturephotooutput/isappleprorawpixelformat(_:">class func isAppleProRAWPixelFormat(OSType) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">픽셀 형식이 Apple ProRAW 형식인지 나타내는 Boolean 값을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="avcapturephotooutput/isbayerrawpixelformat(_:">class func isBayerRAWPixelFormat(OSType) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">픽셀 형식이 Bayer RAW 형식인지 나타내는 Boolean 값을 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/supportedphotopixelformattypes(for:">View on Apple Developer</a>)*</span>
