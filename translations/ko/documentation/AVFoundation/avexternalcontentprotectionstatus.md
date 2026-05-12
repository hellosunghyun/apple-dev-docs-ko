---
source_path: "documentation/AVFoundation/avexternalcontentprotectionstatus.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avexternalcontentprotectionstatus"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avexternalcontentprotectionstatus:0000:0001">AVExternalContentProtectionStatus</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avexternalcontentprotectionstatus:0001:0001">**Framework**: AVFoundation **Kind**: enum</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avexternalcontentprotectionstatus:0002:0001">콘텐츠를 표시할 충분한 보호 존재 여부를 지정하는 상수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avexternalcontentprotectionstatus:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avexternalcontentprotectionstatus:0004:0001">iOS 17.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:avexternalcontentprotectionstatus:0004:0002">iPadOS 17.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:avexternalcontentprotectionstatus:0004:0003">Mac Catalyst 17.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:avexternalcontentprotectionstatus:0004:0004">macOS 14.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:avexternalcontentprotectionstatus:0004:0005">tvOS 17.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:avexternalcontentprotectionstatus:0004:0006">visionOS 1.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
enum AVExternalContentProtectionStatus
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:status-values:0008:0001">상태 값</span>

- <span class="ko-segment" data-segment-id="seg:list:status-values:0009:0001"><a href="avexternalcontentprotectionstatus/pending.md">AVExternalContentProtectionStatus.pending</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:status-values:0010:0001">콘텐츠 보호가 보류 중임을 나타내는 상태입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:status-values:0011:0001"><a href="avexternalcontentprotectionstatus/sufficient.md">AVExternalContentProtectionStatus.sufficient</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:status-values:0012:0001">표시를 위해 충분한 보호가 존재함을 나타내는 상태입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:status-values:0013:0001"><a href="avexternalcontentprotectionstatus/insufficient.md">AVExternalContentProtectionStatus.insufficient</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:status-values:0014:0001">표시를 위해 충분하지 않은 보호가 존재함을 나타내는 상태입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0015:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0016:0001"><a href="avexternalcontentprotectionstatus/init(rawvalue:">init?(rawValue: Int)</a>.md)</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0017:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0018:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0001"><a href="../Swift/BitwiseCopyable.md">BitwiseCopyable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0002"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0003"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0004"><a href="../Swift/RawRepresentable.md">RawRepresentable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0005"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0006"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0020:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="avcontentkeysession.md">class AVContentKeySession</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">미디어 데이터의 복호화 키를 생성하고 추적하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="avcontentkeysessiondelegate.md">protocol AVContentKeySessionDelegate</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">콘텐츠 키 요청을 처리하는 프로토콜입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="avcontentkey.md">class AVContentKey</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">콘텐츠 키 복호화기를 나타내는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="avcontentkeyspecifier.md">class AVContentKeySpecifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">콘텐츠 키를 고유하게 식별하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="avcontentkeyrequest.md">class AVContentKeyRequest</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">콘텐츠 키 세션 객체에서 발행된 콘텐츠 키 복호화 요청의 정보를 캡슐화하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="avpersistablecontentkeyrequest.md">class AVPersistableContentKeyRequest</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">콘텐츠 키 세션에서 발행된 영구 저장 가능한 콘텐츠 키 복호화 요청의 정보를 캡슐화하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="avcontentkeyresponse.md">class AVContentKeyResponse</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">콘텐츠 키 복호화 요청에 대한 응답 정보를 캡슐화하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0035:0001"><a href="avsamplebufferattachcontentkey(_:_:_:">func AVSampleBufferAttachContentKey(CMSampleBuffer, AVContentKey, NSErrorPointer) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">콘텐츠 복호화를 위해 샘플 버퍼에 콘텐츠 키를 연결합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avexternalcontentprotectionstatus">View on Apple Developer</a>*</span>
