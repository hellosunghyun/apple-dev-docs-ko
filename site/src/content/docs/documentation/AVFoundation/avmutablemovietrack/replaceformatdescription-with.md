---
source_path: "documentation/AVFoundation/avmutablemovietrack/replaceformatdescription-with.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/replaceformatdescription-with"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:replaceformatdescriptionwith:0000:0001">replaceFormatDescription(_:with:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:replaceformatdescriptionwith:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:replaceformatdescriptionwith:0002:0001">트랙의 형식 설명자를 새 형식 설명자로 바꿉니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:replaceformatdescriptionwith:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:replaceformatdescriptionwith:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:replaceformatdescriptionwith:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:replaceformatdescriptionwith:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:replaceformatdescriptionwith:0004:0004">macOS 10.13+</span>
- <span class="ko-segment" data-segment-id="seg:list:replaceformatdescriptionwith:0004:0005">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:replaceformatdescriptionwith:0004:0006">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func replaceFormatDescription(_ formatDescription: CMFormatDescription, with newFormatDescription: CMFormatDescription)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 메서드는 형식 설명자에 extension을 추가하거나 오디오 트랙의 오디오 채널 레이아웃을 변경하는 등 트랙의 format description을 변경할 때 사용합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">형식 설명자에는 <a href="https://developer.apple.com/documentation/CoreMedia/kCMFormatDescriptionExtension_VerbatimSampleDescription">@@TOKEN_0@@</a> 및 <a href="https://developer.apple.com/documentation/CoreMedia/kCMFormatDescriptionExtension_VerbatimISOSampleEntry">@@TOKEN_1@@</a> 유형의 extension이 있을 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">형식 설명자의 복사본을 수정하는 경우, 복사본에서 해당 extension을 삭제하지 않으면 변경 내용이 무시될 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>formatDescription</code>: 대체할 <a href="https://developer.apple.com/documentation/CoreMedia/CMFormatDescription">@@TOKEN_1@@</a> 객체입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>newFormatDescription</code>: 지정한 형식 설명자를 대체할 <a href="https://developer.apple.com/documentation/CoreMedia/CMFormatDescription">@@TOKEN_1@@</a> 객체입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001">[var formatDescriptions: [Any]](avmutablemovietrack/formatdescriptions.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">트랙이 참조하는 미디어 샘플의 형식 설명자입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/replaceformatdescription(_:with:">Apple Developer에서 보기</a>)*</span>
