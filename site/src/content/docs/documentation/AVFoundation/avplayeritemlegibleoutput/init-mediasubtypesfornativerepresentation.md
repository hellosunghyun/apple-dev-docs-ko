---
source_path: "documentation/AVFoundation/avplayeritemlegibleoutput/init-mediasubtypesfornativerepresentation.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avplayeritemlegibleoutput/init-mediasubtypesfornativerepresentation"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initmediasubtypesfornativerepresentation:0000:0001">init(mediaSubtypesForNativeRepresentation:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initmediasubtypesfornativerepresentation:0001:0001">**Framework**: AVFoundation **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initmediasubtypesfornativerepresentation:0002:0001">초기화된 legible-output 객체를 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initmediasubtypesfornativerepresentation:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initmediasubtypesfornativerepresentation:0004:0001">iOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initmediasubtypesfornativerepresentation:0004:0002">iPadOS 7.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initmediasubtypesfornativerepresentation:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:initmediasubtypesfornativerepresentation:0004:0004">macOS 10.9+</span>
- <span class="ko-segment" data-segment-id="seg:list:initmediasubtypesfornativerepresentation:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initmediasubtypesfornativerepresentation:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
init(mediaSubtypesForNativeRepresentation subtypes: [NSNumber])
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="1805461-init.md">init</a></span>

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0009:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0010:0001">초기화된 <code>AVPlayerItemLegibleOutput</code> 인스턴스입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0011:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001">인스턴스를 생성할 때 미디어 서브타입 FourCC 코드를 <code>NSNumber</code> 객체로 <code>subtypes</code> 배열에 추가하면 해당 유형을 <a href="https://developer.apple.com/documentation/CoreMedia/CMSampleBuffer">@@TOKEN_2@@</a>에서 문자열 속성으로 처리하지 않고 <code>CMSampleBuffer</code>로 수신하도록 지정할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0002">FourCC 코드는 다음과 같이 <code>NSNumber</code> 객체로 변환됩니다:</span>

```objc
@[ [NSNumber numberWithUnsignedInt:'tx3g'] ]
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0014:0001"><code>init</code> 메서드(권장)를 사용해 <code>AVPlayerItemLegibleOutput</code>를 초기화하면 빈 <code>subtypes</code> 배열로 이 메서드를 호출한 것과 동일하며, 이는 미디어 서브타입에 관계없이 모든 legible 데이터가 공통 형식의 <a href="https://developer.apple.com/documentation/Foundation/NSAttributedString">@@TOKEN_3@@</a> 인스턴스로 전달됨을 의미합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0015:0001">현재 player item에 legible 데이터가 없는 미디어 서브타입이 media <code>subtypes</code> 배열에 포함되어 있어도 오류가 발생하지 않습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0015:0002">An <code>AVPlayerItemLegibleOutput</code> instance doesn’t vend closed caption data as a <a href="https://developer.apple.com/documentation/CoreMedia/CMSampleBuffer">@@TOKEN_1@@</a>, so it is an error to include <code>'c608'</code> in the media subtypes array.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0016:0001">**참고**: <code>AVPlayerItemLegibleOutput</code> 객체를 생성하는 권장 방법은 <a href="1805461-init.md">@@TOKEN_1@@</a> 메서드를 사용하는 것입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0017:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0018:0001"><code>subtypes</code>: <a href="https://developer.apple.com/documentation/Foundation/NSNumber">@@TOKEN_1@@</a> FourCC 코드로 구성된 <a href="https://developer.apple.com/documentation/Foundation/NSArray">@@TOKEN_2@@</a>입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0020:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avplayeritemlegibleoutput/init(mediasubtypesfornativerepresentation:">Apple Developer에서 보기</a>)*</span>
