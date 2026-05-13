---
source_path: "documentation/AppClip/apactivationpayloaderror.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appclip/apactivationpayloaderror"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:apactivationpayloaderror:0000:0001">APActivationPayloadError</span>

<span class="ko-segment" data-segment-id="seg:paragraph:apactivationpayloaderror:0001:0001">**Framework**: App Clips **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:apactivationpayloaderror:0002:0001">An error that an App Clip activation payload returns.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:apactivationpayloaderror:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:apactivationpayloaderror:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:apactivationpayloaderror:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:apactivationpayloaderror:0004:0003">Mac Catalyst 14.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
struct APActivationPayloadError
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:getting-information-about-the-error:0008:0001">Getting information about the error</span>

- <span class="ko-segment" data-segment-id="seg:list:getting-information-about-the-error:0009:0001"><a href="apactivationpayloaderror/errordomain.md">static var errorDomain: String</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:interpreting-errors:0010:0001">Interpreting errors</span>

- <span class="ko-segment" data-segment-id="seg:list:interpreting-errors:0011:0001"><a href="apactivationpayloaderror/doesnotmatch.md">static var doesNotMatch: APActivationPayloadError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:interpreting-errors:0012:0001">The provided URL doesn’t match the invocation URL you registered for the App Clip.</span>

- <span class="ko-segment" data-segment-id="seg:list:interpreting-errors:0013:0001"><a href="apactivationpayloaderror/disallowed.md">static var disallowed: APActivationPayloadError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:interpreting-errors:0014:0001">The user denied location access, or the source of the App Clip invocation wasn’t an NFC tag or visual code.</span>

- <span class="ko-segment" data-segment-id="seg:list:interpreting-errors:0015:0001"><a href="apactivationpayloaderror/code.md">APActivationPayloadError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:interpreting-errors:0016:0001">Error codes that an App Clip activation payload returns.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0017:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0018:0001">Conforms To</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0001"><a href="../Foundation/CustomNSError.md">CustomNSError</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0002"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0003"><a href="../Swift/Error.md">Error</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0004"><a href="../Swift/Hashable.md">Hashable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0005"><a href="../Swift/Sendable.md">Sendable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0019:0006"><a href="../Swift/SendableMetatype.md">SendableMetatype</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0020:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="apactivationpayloaderrordomain.md">let APActivationPayloadErrorDomain: String</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">활성화 페이로드의 오류 도메인을 식별하는 문자열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="apactivationpayloaderror/code.md">APActivationPayloadError.Code</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">App Clip 활성화 페이로드가 반환하는 오류 코드입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">*<a href="https://developer.apple.com/documentation/appclip/apactivationpayloaderror">View on Apple Developer</a>*</span>
